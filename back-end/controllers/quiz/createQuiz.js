import quizModel from "../../models/quizModel.js";

export const createQuiz = async (req, res) => {
  try {
    const Quiz = await quizModel.create(req.body);
    if (Quiz) {
      res.status(201).json({ success: true });
    } else {
      res
        .status(401)
        .json({ success: false, message: "sorry there is an error" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
