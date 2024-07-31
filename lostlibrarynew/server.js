require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Use environment variable for MongoDB connection string
const mongoURI = process.env.MONGO_URI || 'MONGO_URI=mongodb+srv://<username>:<password>@lostlibrary.yeh9hlx.mongodb.net/lostlibrary?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Setup Express to parse JSON body data
app.use(express.json());

// Define a Mongoose schema for player data
const PlayerSchema = new mongoose.Schema({
  username: String,
  password: String,
  level: Number,
  totalKeys: Number,
  totalEnemies: Number,
  totalTime: Number,
});

// Create a Mongoose model from the schema
const Player = mongoose.model('Player', PlayerSchema, 'players');

// Serve static files - use relative path for portability
app.use(express.static(path.join(__dirname, 'public')));

// Define your API routes here
app.post('/api/player/login', async (req, res) => {
  const { username, password } = req.body;
  console.log('Received username:', username); // Debug log

  try {
    // Find the player by username
    const player = await Player.findOne({ username });
    console.log('Found player:', player); // Debug log

    if (!player) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }

    // Password comparison logic
    const isMatch = (password === player.password);
    if (isMatch) {
      return res.json({ success: true, message: 'Login successful' });
    } else {
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


app.post('/api/player/update', async (req, res) => {
  const { username, level, totalKeys, totalEnemies } = req.body;

  try {
    // Find the player by username and update their data
    const player = await Player.findOneAndUpdate(
      { username },
      { level, totalKeys, totalEnemies },
      { new: true } // Return the updated document
    );

    if (!player) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }

    res.json({ success: true, message: 'Player data updated successfully', data: player });
  } catch (error) {
    console.error('Error updating player data:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// API route to fetch player data
app.get('/api/player/:username', async (req, res) => {
  const { username } = req.params;

  try {
    // Find the player by username
    const player = await Player.findOne({ username });
    if (!player) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }

    // Extract the necessary information
    const { level, totalKeys, totalEnemies, totalTime } = player;

    // Send the data as a response
    return res.json({
      success: true,
      data: { level, totalKeys, totalEnemies, totalTime }
    });
  } catch (error) {
    console.error('Fetch player data error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/api/players', async (req, res) => {
  try {
    const players = await Player.find({}).sort({ level: -1, totalKeys: -1, totalEnemies: -1 }).exec();
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Route for the root URL
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'public', 'index.html');
  res.sendFile(indexPath, err => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
