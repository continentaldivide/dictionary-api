const express = require("express");
const db = require("./models");
const app = express();
const port = 8001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("express server");
});

app.post("/", async (req, res) => {
  try {
    const foundWord = await db.word.findOne({
      where: {
        word: req.body.word,
      },
    });
    foundWord
      ? res.send(`definition of ${foundWord.word}: ${foundWord.definition}`)
      : res.send("word not found");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("server running on " + port);
});
