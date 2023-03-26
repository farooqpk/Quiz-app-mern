import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const logoutApiReq = async () => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_BASEURL}/logout`,
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

export const LogoutDelete = ({logOutStatus}) => {
  const navigate = useNavigate();
  const { data, error, isError, isLoading } = useQuery(
    "logout",
    () => logoutApiReq(),
    {
      enabled:!!logOutStatus,
      retry: false,
    }
  );

  if (data) {
    console.log(data);
    navigate('/login')
  }
  if (isLoading) {
    <Loader />;
  }
  if (isError) {
    navigate("/login");
  }
};
