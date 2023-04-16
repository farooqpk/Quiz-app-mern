import quizModel from "../../models/quizModel.js";

export const deleteQuiz = async (req, res) => {
  
  try {
    const deleted = await quizModel.deleteOne({ _id: req.params.quizId });
    if (deleted) {
      res.status(200).json(true);
    } else {
      res
        .status(401)
        .json({ success: false, message: "sorry there is an error" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};
