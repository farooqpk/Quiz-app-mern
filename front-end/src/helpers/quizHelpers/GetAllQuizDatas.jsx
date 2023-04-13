import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { useContext } from "react";
import { AllQuizDataContext } from "../../context/userSide/AllQuizDataContextPovider";

const getQuizApi = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_BASEURL}/getQuizData`,
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

export const GetAllQuizData = () => {
  const { AllquizData, setAllQuizData } = useContext(AllQuizDataContext);

  const { data, error, isError, isLoading } = useQuery(
    "getQuizDatas",
    () => getQuizApi(),
    {
      retry: false,
    }
  );

  if (data) {
    setAllQuizData(data);
  }

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(error);
    return <Loader />;
  }
};