const db = require("../models");
const dictionary = require("../data/dictionary.json");

const seedDictionary = async () => {
  try {
    for (const key in dictionary) {
      const foundWord = await db.word.findOrCreate({
        where: {
          word: key,
        },
        defaults: {
          definition: dictionary[key],
        },
      });
      console.log(foundWord);
    }
  } catch (error) {}
};

seedDictionary();
