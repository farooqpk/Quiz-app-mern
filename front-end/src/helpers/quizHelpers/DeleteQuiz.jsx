
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { useNavigate } from "react-router-dom";


const deleteQuizApi = async (quizId) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_BASEURL}/deleteQuiz`,
      quizId,
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

export const DeleteQuiz = ({quizId}) => {

  const navigate= useNavigate()
  const { data, error, isError, isLoading } = useQuery(
    "deleteQuiz",
    () => deleteQuizApi(quizId),
    {
      enabled: !!quizId,
      retry: false,
    }
  );

  if (data) {
    console.log(data);
    navigate("/adminHome")
  }

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(error);
    return <Loader />;
  }
};
