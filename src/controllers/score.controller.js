import Score from "../models/score.model";

// Word endpoints
export const findAll = async (req, res) => {
    const words = await Score.findAll();
    res.status(200).send({ words });
}

export const addScore = (req, res) => {
    const newScore = new Score(req.body);
    newScore.save();
    res.status(201).send({
        message: "Score successfully uploaded",
        "score": newScore
    });
}