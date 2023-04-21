import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/commons/Loader";

const changeEmailApiReq = async (emailData) => {
  try {
    const { currentEmail, newEmail } = emailData;

    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_BASEURL}/changeEmail`,
      { currentEmail, newEmail },
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

export const ChangeEmailPut=({emailData})=>{
    
    const navigate = useNavigate()
    const { isError, isLoading, data, error } = useQuery(
        "changeEmail",
        () => changeEmailApiReq(emailData),
        {
          enabled: !!emailData,
          retry:false
        }
      );
    
      if (isLoading) {
        return <Loader />;
      }
    
      if (isError) {
        return <Loader/>
      }
    
      data && navigate("/adminHome");
    

}