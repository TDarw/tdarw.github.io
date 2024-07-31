import { gameState } from './gameState.js';

export default class LoginScene extends Phaser.Scene {
    constructor() {
        super({ key: 'LoginScene' });
    }

    preload() {
        this.load.image("startbackground", "assets/backgrounds/startbackground.png",);
        this.load.image("menubanner","assets/backgrounds/menubanner.png")
        this.load.image("helpscreen","assets/backgrounds/helpscreen.png")
    }

    create() {
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        const background = this.add.image(centerX, centerY, 'startbackground').setScale(1, 1.2)

        const menubanner = this.add.image(centerX, centerY - 250, 'menubanner').setScale(1.6, 1.2);

        const title = this.add.text(centerX, centerY - 250, 'The Lost Library', {
            fontFamily: 'Times New Romans',
            fontSize: 'bold 100px',
            fill: '#000000',
          }).setOrigin(0.5);

        const continueButton = this.add.image(centerX, centerY + 350, 'helpscreen').setScale(0.6, 0.1);
        const continueButtonText = this.add.text(centerX, centerY + 350, 'Continue Without Login', {
            fontFamily: 'Times New Romans',
            fontSize: 'bold 20px',
            fill: '#000000',
          }).setOrigin(0.5);

        continueButton.setInteractive();
        continueButton.on('pointerup', () => {
            this.handleLogin('anonymous', 'password');
        });

        // Create a div for the login form
        let loginDiv = document.createElement('div');
        loginDiv.id = 'loginDiv';
        loginDiv.style.position = 'absolute';
        loginDiv.style.left = `${centerX + 250}px`;
        loginDiv.style.top = `${centerY}px`;
        loginDiv.style.transform = 'translate(-50%, -50%)';
        loginDiv.style.zIndex = '1000'; // Ensure the form is above the game canvas

        // Style the login form
        loginDiv.style.display = 'flex';
        loginDiv.style.flexDirection = 'column';
        loginDiv.style.alignItems = 'center';
        loginDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        loginDiv.style.padding = '20px';
        loginDiv.style.borderRadius = '10px';

        // Username input
        let usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.placeholder = 'Username';
        usernameInput.id = 'username';
        usernameInput.style.marginBottom = '10px';
        usernameInput.style.padding = '10px';
        usernameInput.style.fontSize = '16px';

        // Password input
        let passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Password';
        passwordInput.id = 'password';
        passwordInput.style.marginBottom = '10px';
        passwordInput.style.padding = '10px';
        passwordInput.style.fontSize = '16px';

        // Login button
        let loginButton = document.createElement('button');
        loginButton.innerText = 'Login';
        loginButton.style.padding = '10px 20px';
        loginButton.style.fontSize = '16px';

        // Append elements to the div
        loginDiv.appendChild(usernameInput);
        loginDiv.appendChild(passwordInput);
        loginDiv.appendChild(loginButton);

        // Append the login form to the document body
        document.body.appendChild(loginDiv);

        // Handle login button click
        loginButton.addEventListener('click', () => {
            const username = usernameInput.value;
            const password = passwordInput.value;
            this.handleLogin(username, password);
        });
    }

    handleLogin(username, password) {
        fetch('/api/player/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Login successful');
                gameState.username = username; // Store username in gameState

                // Fetch player data
                this.fetchPlayerData(username);

                const loginDiv = document.getElementById('loginDiv');
                if (loginDiv) loginDiv.remove(); // Remove login form from DOM
            } else {
                console.error('Login failed:', data.message);
                alert('Login failed: ' + data.message); // Display error message
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        });
    }

    fetchPlayerData(username) {
        fetch(`/api/player/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    let { level, totalKeys, totalEnemies, totalTime } = data.data;

                    if (username === 'anonymous') {
                        level = 1;
                        totalKeys = 0;
                        totalEnemies = 0;
                        totalTime = 0;
                    }

                    gameState.level = level;
                    gameState.totalKeys = totalKeys;
                    gameState.totalEnemies = totalEnemies;
                    gameState.totalTime = totalTime;

                    // Start the next scene after fetching data
                    this.scene.stop('LoginScene');
                    this.scene.start('StartScene'); // Replace 'NextScene' with your actual scene key
                } else {
                    console.error('Failed to fetch player data:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching player data:', error);
            });
    }
}
