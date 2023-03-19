import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const loginApi = async (adminData) => {
  try {
    const { Email, Password } = adminData;

    const response = await axios.post(
      "http://localhost:3000/login",
      { Email, Password },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    document.cookie = `jwt=${response.data.jwt}; max-age=43200; path=/`;
    return response.data;
  } catch (error) {
    if(error.response){
      throw new Error(error.response.data.message);
    }else{
      throw new Error('Check your internet connection,or please try again later')
    }
  }
};

export const LoginPost = ({ adminData, handleLoginErr }) => {
  const navigate = useNavigate();

  const { isError, isLoading, data, error } = useQuery(
    "login",
    () => loginApi(adminData),
    {
      enabled: !!adminData,
      retry:false
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    handleLoginErr(error.message);
  }

  data && navigate("/adminHome");
};
