import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/commons/Loader";

const changePassApiReq = async (passData) => {
  try {
    const { currentPass, newPass } = passData;

    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_BASEURL}/changeEmail`,
      { currentPass, newPass },
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

export const ChangePassPut=({passData})=>{

    const { isError, isLoading, data, error } = useQuery(
        "changePassword",
        () => changePassApiReq(passData),
        {
          enabled: !!passData,
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