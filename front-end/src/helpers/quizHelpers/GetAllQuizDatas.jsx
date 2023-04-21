import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { useContext } from "react";
import { AllQuizDataContext } from "../../context/common/AllQuizDataContextPovider";
import { CreateQuizFormDataContext } from "../../context/adminSide/CreateQuizFormDataContextProvider";

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
  const { CreateQuizFormData, setCreateQuizFormData } = useContext(
    CreateQuizFormDataContext
  ); 

  const { data, error, isError, isLoading } = useQuery(
    "getQuizDatas",
    () => getQuizApi()
  );

  if (data) {
    //removing current quizform data from state to keep new data and also avoid bug of not updating state in CreateQuizPost component and causing duplicate data because of not updating state, but when update state here working correctly
    setCreateQuizFormData((prev)=>null)
    setAllQuizData(data);
  }

  if (isLoading) {
    return <Loader color={"color"} />;
  }
  if (isError) {
    console.log(error);
    return <Loader color={"color"} />;
  }
};
