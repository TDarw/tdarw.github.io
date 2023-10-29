const britishSlang = [
    {
        question: `Oi mate! Just got these fresh creps. Pretty snazzy, innit?`,
        options: [
            { option: `I thought I smelled something! You also eat them with syrup?`, answer: 0, feedback: `Nah mate, creps are trainers – you know, sneakers? But now you’ve got me craving some breakfast!` },
            { option: `Nice one! They look proper sharp. Where'd you get them?`, answer: 1},
            { option: `You’ve caught some fresh crabs? That’s brilliant. When are we eating them?`, answer: 0, feedback: `You're joking, right? Look at my feet, those are creps – shoes!` },
        ],
    },
    {
        question: `I got them at Footlocker! Alright, listen, hopefully you aren’t too knackered. How about a little kickabout?`,
        options: [
            { option: `Kickabout? You want to kick things around? If that's a way to de-stress, sure!`, answer: 0, feedback: `Nah mate! It's just game.` },
            { option: `Wait, knackered? Are we breaking something? I've got a powerful karate kick, mind you!`, answer: 0, feedback: `Haha, no! “Knackered” means tired. Fancy a game though?` },
            { option: `Too knackered for a kickabout? Never! Let’s head to the park right now!`, answer: 1 },
        ],
    },
    {
        question: `Brilliant! But first, fancy grabbing a cheeky Nando's? I'm peckish after all this talk.`,
        options: [
            { option: `Oh, I've heard about Nando's! They serve the legendary peri-peri chicken, right? Count me in!`, answer: 1 },
            { option: `Cheeky Nando's? Isn’t that a famous chicken at the London Zoo?`, answer: 0, feedback: `Haha, no mate! Nando's is a place to get chicken. "Cheeky" means it's a bit spontaneous.` },
            { option: `Because of Nando's and the chicken... got it! Like a bird pecking. So where do we get the chicken?`, answer: 0, feedback: `Bit off there! "Peckish" means slightly hungry. Let's go grab a bite!` },
        ],
    },
    {
        question: `That's the one! After that, fancy popping round to the pub for a pint? There's nothing like a cold one after a good game and some grub.`,
        options: [
            { option: `Sounds perfect! Popping balloons though? Is it someone's birthday?`, answer: 0, feedback: `"Popping round" just means visiting or stopping by. No balloons!` },
            { option: `Sounds perfect! I could definitely use a pint of beer after all that running.`, answer: 1 },
            { option: `Sounds perfect! But I'm not in the mood for a pint of ice cream though.`, answer: 0, feedback: `Not that pint! We’re talking about something else here. Cheers!` },
        ],
    },
    {
        question: `Exactly! And maybe after that, if you're up for it, we can hit the high street for a spot of shopping. Get you kitted out in some proper British gear!`,
        options: [
            { option: `High street? Isn’t that where the coffeeshops are in Amsterdam?`, answer: 0, feedback: `No mate! "High street" in Britain refers to the main shopping street in towns. Lots of shops to explore!` },
            { option: `High street? So that’s where all the luxury brands are? My wallet might not be ready for that.`, answer: 0, feedback: `Not necessarily luxury, but it does have a mix of various shops. Let’s see what catches your eye!` },
            { option: `High street? Perfect! I've always wanted one of those double-decker bus souvenirs.`, answer: 1 },
        ],
    },
    {
        question: `You're getting the hang of it! After the shopping spree, fancy catching a smashing gig tonight?`,
        options: [
            { option: `Smashing gig? I've never been to a British gig. Do they do that headbanging thing?`, answer: 1 },
            { option: `A smashing gig? Are they gonna break their instruments?`, answer: 0, feedback: `Haha, "smashing" is a slang term meaning "fantastic" or "awesome" here. No instruments will be harmed, promise!` },
            { option: `Cup of tea? Is that another shopping term? Or is it tea time?`, answer: 0, feedback: `"Cup of tea" is an expression meaning something one likes or prefers. But after the gig, a cuppa might be nice!` },
        ],
    },
    {
        question: `You're spot on with the headbanging, depending on the genre! After the gig, if you're still up, there's a bee's knees spot for a late-night chat with a view of the city.`,
        options: [
            { option: `Bee's knees? Do bees even have knees?`, answer: 0, feedback: `It's just a quirky British phrase meaning it's excellent or top-notch. No bee anatomy involved!` },
            { option: `Bee's knees? That sounds splendid. City lights by the river? I’m in!`, answer: 1 },
            { option: `Bee's knees? I'll pack some ointment in case we get stung!`, answer: 0, feedback: `No stings, promise! It's just a fun way to say it's a great place.` },
        ],
    },
    {
        question: `If you fancy, tomorrow morning we can catch the first light at Primrose Hill. It’s a breath-taking sight after a night out.`,
        options: [
            { option: `First Light? Isn’t that a new British film?`, answer: 0, feedback: `Not this time! Just talking about catching the sunrise. Primrose Hill has a gorgeous view of it.` },
            { option: `Sight for sore eyes? Better bring my glasses then!`, answer: 0, feedback: `Haha, glasses might help with the distant view! But it just means the view is really lovely.` },
            { option: `Morning view from a hill? Sounds picturesque. I'll be sure to bring my camera.`, answer: 1 },
        ],
    },
    {
        question: `You've got the spirit! One last thing though, have you tried a proper English afternoon tea? It's a delightful experience with scones, clotted cream, and a variety of teas.`,
        options: [
            { option: `Afternoon tea? Like, just a regular tea but later in the day?`, answer: 0, feedback: `Not quite! It's a whole affair with sandwiches, pastries, and teas. A true British tradition!` },
            { option: `English afternoon tea? I’ve heard about it! Tiny sandwiches, pastries, and tea, right? I'm in!`, answer: 1 },
            { option: `English afternoon tea? I've seen it in films where folks hold their pinky up. Should I practice?`, answer: 0, feedback: `Haha, the pinky thing is optional. Just enjoy the experience!` },
        ],
    },
    {
        question: `Splendid! Wrapping up your trip, just remember: when in Britain, always keep calm and carry on, okay?`,
        options: [
            { option: `You Brits and your quirky sayings! Does it mean to drink tea when things get tough?`, feedback: `Not quite. While tea is iconic, the saying is about maintaining composure during challenging times.`, answer: 0 },
            { option: `Absolutely! Keep calm and have another cuppa, right? Cheers, mate!`, answer: 2 },
            { option: `Right! And also remember to always look left and right when crossing the street.`, feedback: `Good advice for the traffic, but not directly related to the phrase!`, answer: 0 },
        ],
    },
]

const britishSlangQuiz = [
  {
      question: 'Alright let\'s review your knowledge of British slang vocabulary! First question: what are "creps"?',
      options: [
          { option: 'A type of pancake.', answer: 0, feedback: 'A delicious thought, but "creps" aren\'t for breakfast in this context.' },
          { option: 'Fresh crabs.', answer: 0, feedback: 'Tasty, but that\'s not the meaning here.' },
          { option: 'Sneakers or trainers.', answer: 1, feedback: 'Spot on! They\'re footwear.' }
      ],
  },
  {
      question: 'What does "knackered" mean?',
      options: [
          { option: 'Angry.', answer: 0, feedback: 'That\'s not the emotion "knackered" describes.' },
          { option: 'Ready for karate.', answer: 0, feedback: 'It\'s not about martial arts. Try again!' },
          { option: 'Tired.', answer: 1, feedback: 'Exactly right!' }
      ],
  },
  {
      question: 'What does "kickabout" refer to?',
      options: [
          { option: 'Kicking things around for stress relief.', answer: 0, feedback: 'A unique interpretation, but not the one we\'re looking for.' },
          { option: 'Playing soccer or football.', answer: 1, feedback: 'You\'ve got it!' },
          { option: 'Practicing karate kicks.', answer: 0, feedback: 'It\'s not about martial arts. Have another guess!' }
      ],
  },
  {
      question: 'What does "fancy" mean in the context of "fancy grabbing a cheeky Nando\'s"?',
      options: [
          { option: 'To think or daydream.', answer: 0, feedback: 'Not in this context. Give it another shot!' },
          { option: 'Want or desire.', answer: 1, feedback: 'Exactly! It implies a desire or a wish for something.' },
          { option: 'To dress in an elaborate manner.', answer: 0, feedback: 'Nope, it\'s not about dressing up this time.' }
      ],
  },
  {
      question: 'What does "cheeky" in "cheeky Nando\'s" mean?',
      options: [
          { option: 'Mischievous or naughty.', answer: 0, feedback: 'It does often, but not in this context.' },
          { option: 'Doing something on a whim or treating oneself.', answer: 1, feedback: 'Exactly right! It\'s often used to suggest something spontaneous or indulgent.' },
          { option: 'A reference to the bird "chicken".', answer: 0, feedback: 'An interesting guess, but not the one we\'re looking for.' }
      ],
  },
  {
      question: 'What does "smashing" mean in the context of a "smashing gig"?',
      options: [
          { option: 'Literally breaking things.', answer: 0, feedback: 'Not this time. Give it another shot!' },
          { option: 'A music show where people headbang.', answer: 0, feedback: 'While that sounds fun, that\'s not the exact meaning here.' },
          { option: 'Great or fantastic.', answer: 1, feedback: 'Absolutely correct!' }
      ],
  },
  {
      question: 'In the dialogue, what does "cup of tea" signify when used as "isn\'t your cup of tea"?',
      options: [
          { option: 'An actual drink you consume.', answer: 0, feedback: 'It often is, but not in this phrase!' },
          { option: 'Your preference or liking.', answer: 1, feedback: 'Spot on! It\'s all about personal taste.' },
          { option: 'An afternoon British tradition.', answer: 0, feedback: 'That would be lovely, but not the intended meaning here.' }
      ],
  },
  {
      question: 'What does "bee\'s knees" mean?',
      options: [
          { option: 'A location with a high population of bees.', answer: 0, feedback: 'A buzzing guess, but not the one we\'re looking for.' },
          { option: 'An excellent or the best place/thing.', answer: 1, feedback: 'That\'s right! It\'s a quirky way to say something is top-notch.' },
          { option: 'A place where people chat about bees.', answer: 0, feedback: 'That would be an interesting place, but it\'s not the meaning here.' }
      ],
  },
  {
      question: 'What does "sight for sore eyes" mean?',
      options: [
          { option: 'A place to buy eyeglasses.', answer: 0, feedback: 'Nope, not an optician\'s slogan.' },
          { option: 'A phrase indicating you should bring your glasses.', answer: 0, feedback: 'It isn\'t about prescription glasses.' },
          { option: 'A beautiful view or seeing something pleasing.', answer: 1, feedback: 'Absolutely! It\'s something that\'s a pleasure to see.' }
      ],
  },
  {
      question: 'What does the phrase "keep calm and carry on" signify?',
      options: [
          { option: 'Always stay cautious.', answer: 0, feedback: 'It\'s more about composure than caution.' },
          { option: 'Maintain composure and continue with tasks.', answer: 2, feedback: 'Exactly right! It encourages perseverance and calmness.' },
          { option: 'Remain silent and agree with everything.', answer: 0, feedback: 'Not quite. It\'s about keeping cool, not necessarily staying quiet.' }
      ],
  },
];

const australianSlang = [
    {
      question: `G'day mate! Just snagged these new thongs from the shop. Ripper, hey?`,
      options: [
        { option: `What!? Please don’t show me your underwear!`, answer: 0, feedback: `Haha, nah mate! In Australia, "thongs" refer to something else.`},
        { option: `Oh, brilliant! They look perfect for the beach!`, answer: 1},
        { option: `Oke… Who do you plan on using them on?`, answer: 0, feedback: `Just on me feet, mate! It's not a weapon!`},
      ],
    },
    {
      question: `They’re super comfy. Now, you keen for a barbie this arvo?`,
      options: [
        { option: `Like the movie? I didn’t know it was still in cinemas.`, answer: 0, feedback: `Mate, "barbie" here means time for some snags and cold ones!`},
        { option: `Sounds like fun! Do we dress her up?`, answer: 0, feedback: `Haha, not that kind of Barbie! Just some good ol' grilling and chilling.`},
        { option: `Excellent! Who's bringing the shrimp?`, answer: 1},
      ],
    },
    {
      question: `No shrimp on this barbie, mate! It's all about the snags and lamb chops. You ever tried Vegemite?`,
      options: [
        { option: `I’ve heard of that vegetable. Sounds healthy!`, answer: 0, feedback: `Not quite! It's very Aussie and definitely an acquired taste.`},
        { option: `Oh yeah, that's the dark, salty spread, right?`, answer: 1},
        { option: `Sounds exotic. Is it like jam or marmalade?`, answer: 0, feedback: `Haha, not even close! But you've got to give it a try.`},
      ],
    },
    {
      question: `Spot on! And if you're feeling a bit parched later, we can crack open a coldie.`,
      options: [
        { option: `Like a cold medicine? I'm not feeling sick, thanks!`, answer: 0, feedback: `No worries! "Coldie" is just slang for a cold beer.`},
        { option: `A cold beer sounds brilliant after all this Aussie slang lesson!`, answer: 1},
        { option: `Ah, gotcha! I think I've got the hang of this now. A cold shower sounds good!`, answer: 0, feedback: `Haha, a "coldie" is a beer, mate!`},
      ],
    },
    {
      question: `You're catching on quick! Afterwards, if you've still got energy, we can take a ute to the beach and catch some waves.`,
      options: [
        { option: `Ute? Do I need to pack a tent and sleeping bag? Oh, wait, it's a kind of truck, right? Count me in!`, answer: 1},
        { option: `Ute? Is that some kind of Australian animal? Maybe a small kangaroo?`, answer: 0, feedback: `Nah, mate! A "ute" is a vehicle.`},
        { option: `Ute? That’s a new one. Is it a kind of boat? I love sailing!`, answer: 0, feedback: `Nope, mate! It's short for "utility vehicle", like a pickup truck!`},
      ],
    },
    {
      question: `Indeed! A ute is pickup truck. After the beach, fancy popping by the bottle-o on the way back? Need to stock up a bit.`,
      options: [
        { option: `Sounds like a game. How do you play Bottle-o?`, answer: 0, feedback: `Haha, no! "Bottle-o" is where Aussies get their bevvies.`},
        { option: `Ah, got it! So it's where you get the coldies, right?`, answer: 1},
        { option: `Bottle-o? Is that a place to recycle bottles?`, answer: 0, feedback: `Nah mate, it's where you can stock up for the esky!`},
      ],
    },
    {
      question: `You can get all kinds of bevvies there. Once we're sorted, we can sit back and enjoy a footy match on the telly. Reckon?`,
      options: [
        { option: `I didn’t know you guys also watched soccer. Let’s watch!`, answer: 0, feedback: `Not quite, mate. Here, "footy" often refers to a local sport.`},
        { option: `Sounds cool! I have never seen a rugby match before.`, answer: 1},
        { option: `I always thought football was mainly an American sport…`, answer: 0, feedback: `Ah, in Australia, "footy" isn't American football.`},
      ],
    },
    {
      question: `Yeah, man. Wrapping up the day, how about grabbing some choccy bikkies and a cuppa?`,
      options: [
        { option: `Great, I love chocolate bars!`, answer: 0, feedback: `Nah mate, they're made with chocolate though.`},
        { option: `Great, I love chocolate cookies!`, answer: 1},
        { option: `Great, I love chocolate brownies!`, answer: 0, feedback: `Close but not quite, mate! They're perfect with a hot brew!`},
      ],
    },
    {
      question: `You're on the right track! Last one, if we're up for a trip tomorrow, fancy heading to the bush for a bit of a stickybeak?`,
      options: [
        { option: `Stickybeak? Are we going bird watching?`, answer: 0, feedback: `Not quite, mate! "Stickybeak" means having a nosy or a look around.`},
        { option: `Bush? Like a plant store?`, answer: 0, feedback: `Nah, "the bush" in Australia refers to the countryside or natural areas. Great for an adventure!`},
        { option: `Stickybeak? Are we going to see kangaroos?`, answer: 1},
      ],
    },
    {
      question: `For sure, we might spot a roo or two! Before we go, remember when you're Down Under, always give it a fair go and enjoy every moment. Cheers!`,
      options: [
        { option: `Always give it a what now? So, we're going to a fair?`, answer: 0, feedback: ` Not quite! "Give it a fair go" means to give something a chance or try it out without judgment.`},
        { option: `Absolutely! Thanks for the Aussie crash course. Fair dinkum, it's been great!.`, answer: 2},
        { option: `Right! Just like when we say "give it a shot" back home. Got it!`, answer: 0, feedback: `You're on the right track, but the phrase has more of an emphasis on fairness and equal opportunity.`},
      ],
    },
];

const australianSlangQuiz = [
  {
      question: 'Alright let\'s review your knowledge of Australian slang vocabulary! In the context of the dialogue, what are "thongs"?',
      options: [
          { option: 'Underwear.', answer: 0, feedback: 'In Australia, thongs typically aren’t worn as underwear.' },
          { option: 'A weapon.', answer: 0, feedback: 'Thongs are much more harmless!' },
          { option: 'Flip-flops or sandals.', answer: 1 }
      ],
  },
  {
      question: "What's the equivalent of saying 'ripper' in the dialogue?",
      options: [
          { option: 'Terrible.', answer: 0, feedback: 'Quite the opposite!' },
          { option: 'Fantastic or great.', answer: 1 },
          { option: 'Ripped or torn.', answer: 0, feedback: 'Ripper isn’t about something being torn in this context.' }
      ],
  },
  {
      question: 'What does "barbie" mean?',
      options: [
          { option: 'A doll.', answer: 0, feedback: 'While Barbie is indeed a popular doll, that’s not the context here.' },
          { option: 'A movie.', answer: 0, feedback: 'Not a film! Think more about Australian outdoor activities.' },
          { option: 'Barbecue.', answer: 1 }
      ],
  },
  {
      question: 'What does "arvo" mean in the context of "this arvo"?',
      options: [
          { option: 'Afternoon.', answer: 1 },
          { option: 'Arrow.', answer: 0, feedback: 'Not related to archery!' },
          { option: 'Argument.', answer: 0, feedback: 'Arvo has a much more relaxed meaning!' }
      ],
  },
  {
      question: 'What is "Vegemite"?',
      options: [
          { option: 'A type of vegetable.', answer: 0, feedback: 'Not quite a vegetable.' },
          { option: 'A jam or marmalade.', answer: 0, feedback: 'A bit darker and saltier than jam!' },
          { option: 'A dark, salty spread.', answer: 1 }
      ],
  },
  {
      question: 'What does "coldie" refer to?',
      options: [
          { option: 'Cold medicine.', answer: 0, feedback: 'Coldie won’t cure a cold!' },
          { option: 'A cold shower.', answer: 0, feedback: 'Not a shower, but it’s still refreshing!' },
          { option: 'A cold beer.', answer: 1 }
      ],
  },
  {
      question: 'What is a "ute"?',
      options: [
          { option: 'An Australian anima.', answer: 0, feedback: 'It’s not an animal you’d find in the outback!' },
          { option: 'A type of boat.', answer: 0, feedback: 'It won’t float very well!' },
          { option: 'A utility vehicle or pickup truck.', answer: 1 }
      ],
  },
  {
      question: 'What do you put drinks in to keep them cool?',
      options: [
          { option: 'A freezer.', answer: 0, feedback: 'You could, but it’s a bit overkill!' },
          { option: 'An esky.', answer: 1 },
          { option: 'A glove compartment.', answer: 0, feedback: 'Your drinks won’t stay very cool there!' }
      ],
  },
  {
      question: 'What is "footy" referring to in the dialogue?',
      options: [
          { option: 'Soccer.', answer: 0, feedback: 'Another type of football!' },
          { option: 'American football.', answer: 0, feedback: 'Wrong continent!' },
          { option: 'Australian rules football or rugby.', answer: 1 }
      ],
  },
  {
      question: 'What does "stickybeak" mean?',
      options: [
          { option: 'Bird watching.', answer: 0, feedback: 'Not about actual birds!' },
          { option: 'Seeing kangaroos.', answer: 0, feedback: 'It’s not about watching wildlife!' },
          { option: 'Having a nosy or a look around.', answer: 1 }
      ],
  },
  {
    question: `In Australian slang, what does the phrase "give it a fair go" mean?`,
    options: [
        { option: 'To attend a local fair or carnival.', answer: 0, feedback: 'No mate!' },
        { option: 'To try something with an open mind and fair judgment.', answer: 2 },
        { option: 'To play fair in a sporting event.', answer: 0, feedback: `While we love our sports, "give it a fair go" isn't about competition` }
    ],
},

];

  const questions = {
    britishSlang: britishSlang,
    britishSlangQuiz: britishSlangQuiz,
    australianSlang: australianSlang,
    australianSlangQuiz: australianSlangQuiz,
  };

  export default questions;
    