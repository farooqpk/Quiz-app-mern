import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const loginApiReq = async (adminData) => {
  try {
    const { Email, Password } = adminData;

    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_BASEURL}/login`,
      { Email, Password },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    
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
    () => loginApiReq(adminData),
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
