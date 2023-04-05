import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { useNavigate } from "react-router-dom";
import { CreateQuizFormNextBtnContext } from "../../context/adminSide/CreateQuizFormNextBtnContextProvider";
import { useContext } from "react";

const createQuizApi = async (CreateQuizFormData) => {
  console.log(CreateQuizFormData);
  // try {
  //   const response = await axios.post(
  //     `${import.meta.env.VITE_SERVER_BASEURL}/createQuiz`,
  //     { CreateQuizFormData },
  //     { headers: { "Content-Type": "application/json" } }
  //   );
  //   return response.data;
  // } catch (error) {
  //   if (error.response) {
  //     throw new Error(error.response.data.message);
  //   } else {
  //     throw new Error(
  //       "Check your internet connection,or please try again later"
  //     );
  //   }
  // }
};

export const CreateQuizPost = ({ CreateQuizFormData }) => {

  const { isNextClick, setIsNextClick } = useContext(
    CreateQuizFormNextBtnContext
  );
  const navigate = useNavigate();

  const { data, error, isError, isLoading } = useQuery(
    "CreateQuizFormData",
    () => createQuizApi(CreateQuizFormData),
    {
      enabled: !!CreateQuizFormData,
      retry: false,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    setIsNextClick(!isNextClick)
    navigate("/adminHome");
  }

  if (isError) {
    return <Loader />;
  }
};
