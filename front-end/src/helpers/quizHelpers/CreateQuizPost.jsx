import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { useContext } from "react";
import { CreateQuizFormDataContext } from "../../context/adminSide/CreateQuizFormDataContextProvider";

import { useNavigate } from "react-router-dom";

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

  const { CreateQuizFormData } = useContext(CreateQuizFormDataContext);

  const { isError, isLoading } = useQuery(
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

  if (isError) {
    navigate("/login");
  }
};
