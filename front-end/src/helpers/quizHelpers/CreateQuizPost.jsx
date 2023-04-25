import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { CreateQuizFormNextBtnContext } from "../../context/adminSide/CreateQuizFormNextBtnContextProvider";
import { useContext, useEffect } from "react";
import { CreateQuizFormDataContext } from "../../context/adminSide/CreateQuizFormDataContextProvider";
import { CreateQuizIsFinishedContext } from "../../context/adminSide/CreateQuizIsFinishedContextProvider";
import { useNavigate } from "react-router-dom";
import { AdminHome } from "../../pages/admin/home/AdminHome";

const createQuizApi = async (CreateQuizFormData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_BASEURL}/createQuiz`,
      CreateQuizFormData,
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

export const CreateQuizPost = () => {
  const navigate = useNavigate();

  const { CreateQuizFormData, setCreateQuizFormData } = useContext(
    CreateQuizFormDataContext
  );
  const { isNextClick, setIsNextClick } = useContext(
    CreateQuizFormNextBtnContext
  );
  const { isFinished, SetisFinished } = useContext(CreateQuizIsFinishedContext);

  const { data, error, isError, isLoading } = useQuery(
    "CreateQuizFormData",
    () => createQuizApi(CreateQuizFormData),
    {
      enabled: !!CreateQuizFormData,
      retry: false,
      // onSuccess: () => {
      //   // return <AdminHome />;
      // },
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    setIsNextClick(!isNextClick);
    SetisFinished(!isFinished);
  }

  if (isError) {
    navigate("/login");
  }
};
