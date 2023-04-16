import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import Loader from "../../components/commons/Loader";

const deleteQuizApi = async (quizId) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_BASEURL}/deleteQuiz/${quizId}`,

      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(
        "Check your internet connection,or please try again later"
      );
    }
  }
};

export const DeleteQuiz = ({ quizId, handleDeleteQuiz }) => {
  const queryClient = useQueryClient();

  const { data, error, isError, isLoading } = useQuery(
    "deleteQuiz",
    () => deleteQuizApi(quizId),
    {
      retry: false,
      onSuccess: () => {
        // upddate this state to correct the conditon in the QuizCard component delete button click toggle
        handleDeleteQuiz();
        //to fetch updated GetQuizData query after delete
        queryClient.fetchQuery("getQuizDatas");
      },
    }
  );

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Loader />;
  }
};
