import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";


const resetPassApiReq = async (password,email) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_BASEURL}/resetPass`,
        {password,email},
        { headers: { "Content-Type": "application/json" }, withCredentials: true}
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


export const ResetPassPost=({password, handleResetPassErr,email})=>{

    const navigate = useNavigate();
    const { data, error, isError, isLoading } = useQuery(
      "resetPass",
      () => resetPassApiReq(password,email),
      {
        enabled: !!password,
        retry: false
      }
    );
  
    if (isError) {
      handleResetPassErr(error.message);
    }
    if (isLoading) {
      return <Loader />;
    }

    if(data){
      
        navigate('/login')
    }


    return null
}