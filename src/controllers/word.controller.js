import Word from "../models/word.model";

export const findAllWords = async (req, res) => {
    const words = await Word.findAll();
    res.status(200).send({ words });
}

export const findCategory = async (req, res) => {
    const words = await Word.findCategory(req.params.category);
    res.status(200).send({ words });
}

export const createWord = (req, res) => {
    const newWord = new Word(req.body);
    newWord.save();
    res.status(201).send({
        message: "Word successfully created",
        "word": newWord
    });
}