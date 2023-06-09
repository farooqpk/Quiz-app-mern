import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/commons/Loader";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EmailContext } from "../../context/adminSide/EmailContextProvider";

const otpApiReq = async (otp, Email) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_BASEURL}/verifyOtp`,
      { otp, Email },
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

export const OtpPost = ({ otpData, handleOtpErr}) => {

  const navigate = useNavigate();
  const {Email,setEmail}=useContext(EmailContext)

  const { data, error, isError, isLoading } = useQuery(
    "otpSend",
    () => otpApiReq(otpData, Email),
    {
      enabled: !!otpData,
      retry: false
    }
  );

  if (isError) {
    handleOtpErr(error.message);
  }
  if (isLoading) {
    return <Loader />;
  }
  if (data) {
    navigate("/resetPass");
  }
};
