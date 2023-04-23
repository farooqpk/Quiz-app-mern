import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/commons/Loader";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const changePassApiReq = async (passData) => {
  try {
    const { currentPass, newPass } = passData;

    const response = await axios.put(
      `${import.meta.env.VITE_SERVER_BASEURL}/changePass`,
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

export const ChangePassPut=({passData,handlePassExistErr})=>{

    const navigate = useNavigate()
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
        handlePassExistErr(error.message)
      }
    
      if(data){
        toast.success("pass updated",{
          toastId:"success1"
        })
        navigate("/adminHome");
      } 

}