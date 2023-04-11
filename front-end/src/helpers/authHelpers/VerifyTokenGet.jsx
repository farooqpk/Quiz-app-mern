import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { useNavigate } from "react-router-dom";

const verifyTokenApiReq = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_BASEURL}/verifyToken`,
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
//this api request for protect react router
export const VerifyTokenGet = ({ children }) => {
  const navigate = useNavigate();
  const { data, error, isError, isLoading } = useQuery(
    "verifytoken",
    () => verifyTokenApiReq(),
    {
      retry: false,
    }
  );

  if (data) {
    return children;
  }
  
  if (isLoading) {
    return <Loader color={'white'} />;
  }
  if (isError) {
    navigate("/login")
  }
};
