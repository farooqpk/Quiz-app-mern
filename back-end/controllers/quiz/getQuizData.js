import quizModel from "../../models/quizModel.js";

export const getQuizData = async (req, res) => {
  try {
    const quizData = await quizModel.find();

    if (quizData) {
      res.status(200).json(quizData);
    } else {
      res
        .status(401)
        .json({ success: false, message: "sorry there is no quiz available" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
