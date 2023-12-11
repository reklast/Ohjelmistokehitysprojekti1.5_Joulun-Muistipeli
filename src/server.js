const express = require("express");
const app = express();
const PORT = process.env.REACT_APP_PORT || 5000;

require("dotenv").config();


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect(process.env.REACT_APP_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const playerSchema = require("./models/playerSchema");

app.use(express.json());

app.get("/items", async (req, res) => {
  try {
    const items = await playerSchema.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.post("/createPlayer", async (req, res) => {
  console.log('REQUEST BODY HERE: ' + req.body.name);
  try {
    playerSchema.findOne({ Name: req.body.name })
      .then((data) => {
        if (!data) {
          console.log('No data created for this player');
          playerSchema.create({
            Name: req.body.name,
            BestScore: "0",
          });
          res.send(`Data has been added for this player`);
        }
        if (data) {
          res.send(`${data} this player already added to the DB`);
        }
      })
  } catch (e) {
    return console.log(e);
  }
})

app.post("/getPlayersScore", async (req, res) => {
  try {
    playerSchema.findOne({ Name: req.body.name })
      .then((data) => {
        if (!data) {
          console.log('Creating a new Player instance');
          playerSchema.create({
            Name: req.body.name,
            BestScore: "0",
          });
          res.send(`Data has been added for this player`)
        }
        if (data) {
          console.log('Player exists');
          res.send(JSON.stringify(data.BestScore))
        }
      })
  } catch (e) {
    return console.log(e);
  }
})

app.post("/setBestScore", async (req, res) => {
  console.log('REQUEST BODY HERE: ' + req.body.name);
  try {
    playerSchema.findOne({ Name: req.body.name })
      .then((data) => {
        if (!data) {
          console.log('No data created for this player');
          playerSchema.create({
            Name: req.body.name,
            BestScore: "0",
          });
          res.send(`Data has been added for this player`);
        }
        if (data) {
          data.BestScore = req.body.newBestScore
          data.save();
          res.send('Best score has been updated');
        }
      })
  } catch (e) {
    return console.log(e);
  }
})
