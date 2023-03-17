import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../components/Loader";

const forgotApi = async (Email) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/forgotPass",
      { Email },
      { headers: { "Content-Type": "application/json" } }
    );

    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const ForgotPost = ({ Email, setForgotErr }) => {
  const { data, error, isError, isLoading ,} = useQuery(
    "forgotPass",
    () => forgotApi(Email),
    {
      enabled: !!Email,
      //its used to avoid multiple request
      retry: false,
    }
  );

  if (isError) {
    setForgotErr(error.message);
  }

  if (isLoading) {
    return <Loader />;
  }

  return null;
};
