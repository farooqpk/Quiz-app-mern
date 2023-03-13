import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const loginApi = async (adminData) => {
  const { Email, Password } = adminData;

  const response = await axios.post(
    "http://localhost:3000/login",
    { Email, Password },
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  document.cookie = `jwt=${response.data.jwt}; max-age=43200; path=/`;
  return response.data;
};

export const LoginPost = ({ adminData }) => {
  const navigate = useNavigate();

  const { isError, isLoading, data } = useQuery(
    "login",
    () => loginApi(adminData),
    {
      enabled: !!adminData,
    }
  );

  if (isLoading)
    return <div className="btn btn-ghost loading flex justify-center"></div>;
  if (isError) return <h1>Error...</h1>;
  data && navigate("/adminHome");
};
