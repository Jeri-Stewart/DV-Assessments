const db = require("./db.json");
let id = 2;
module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "All the effort you are making will ultimately pay off.",
      "Your high-minded principles spell success.",
      "A dream you dream alone is only a dream. A dream you dream together is reality.",
      "The greatest risk is not taking one.",
      "An alien of some sort will be appearing to you shortly.",
      "He who laughs at himself never runs out of things to laugh at.",
      "The time is right to make new friends.",
      "You will be successful in love.",
      "You are a lover of words; someday you should write a book.",
      "Curiosity kills boredom. Nothing can kill curiosity",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  getInspiration: (req, res) => {
    const inspirationalQuotes = [
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
      "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
      "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
      "If you want to lift yourself up, lift up someone else. -Booker T. Washington",
      "The only way to do great work is to love what you do. -Steve Jobs",
      "Believe in the power of your dreams. -Unknown",
      "You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to be. -Napoleon Hill",
      "Happiness is not something ready made. It comes from your own actions. -Dalai Lama",
      "The best way to predict the future is to create it. -Abraham Lincoln",
      "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
      "Strive not to be a success, but rather to be of value. -Albert Einstein",
      "Chase your dreams but always know the road that'll lead you home again. -Tim McGraw",
      "Your time is limited, don't waste it living someone else's life. -Steve Jobs"
    ];
    let randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
    let randomQuote = inspirationalQuotes[randomIndex];

    res.status(200).send(randomQuote)
  },
  getAffirmations: (req, res) => {
    const posAffirmations = [
      "I am worthy of love and respect.",
      "I am confident and capable of achieving my goals.",
      "I trust in my abilities and know that I can overcome any challenge.",
      "I am healthy, strong, and full of energy.",
      "I deserve success and abundance in all areas of my life.",
    ];
    res.status(200).send(posAffirmations);
  },
  getGoals: (req, res) => {
    res.status(200).send(db);
  },
  createGoal: (req, res) => {
    let newGoal = { ...req.body, id: id, status: "Not Completed" };
    db.push(newGoal);
    res.status(200).send(db);
    id++;
  },
  updateGoal: (req, res) => {
    let { id } = req.params;
    let index = db.findIndex((elem) => +elem.id === +id);
    if (db[index].status === "Not Completed") {
      db[index].status = "Completed";
      res.status(200).send(db);
    }
    else if(db[index].status === "Completed"){
        db[index].status = "Not Completed";
    }
     else {
      res.sendStatus(400);
    }
  },
  deleteGoal: (req, res) => {
    let index = db.findIndex((elem) => elem.id === +req.params.id);
    db.splice(index, 1);
    res.status(200).send(db);
  },
};
