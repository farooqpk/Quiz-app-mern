import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";


const forgotApiReq = async (Email) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/forgotPass",
      { Email },
      { headers: { "Content-Type": "application/json" } }
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

export const ForgotPost = ({ Email, handleForgotErr }) => {
  const navigate = useNavigate();

  const { data, error, isError, isLoading } = useQuery(
    "forgotPass",
    () => forgotApiReq(Email),
    {
      enabled: !!Email,
      //its used to avoid multiple request
      retry: false,
    }
  );

  if (isError) {
    handleForgotErr(error.message);
  }

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    navigate("/otpForm", { state: Email && Email });
  }

  return null;
};
