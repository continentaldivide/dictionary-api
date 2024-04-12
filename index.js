const express = require("express");
const db = require("./models");
const app = express();
const { Op } = require("sequelize");
const PORT = process.env.PORT || 8001;

app.get("/:word", async (req, res) => {
  try {
    const foundWord = await db.word.findOne({
      where: {
        word: {
          [Op.iLike]: req.params.word,
        },
      },
    });
    foundWord
      ? res.send({
          status: "found",
          word: foundWord.word,
          definition: foundWord.definition,
        })
      : res.send({ status: "not found" });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log("server running on " + PORT);
});
