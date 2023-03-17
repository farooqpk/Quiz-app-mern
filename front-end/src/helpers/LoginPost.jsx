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
    throw Error(error.response.data.message);
  }
};

export const LoginPost = ({ adminData, setLoginErr }) => {
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
    setLoginErr(error.message);
  }

  data && navigate("/adminHome");
};
