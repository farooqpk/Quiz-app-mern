import { useState } from "react";
import { LogoutDelete } from "../../helpers/authHelpers/LogoutDelete";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const AdminNav = () => {
  const [logOutStatus, setLogOutStatus] = useState(false);

  const Handlelogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("", "", "success").then(() => setLogOutStatus(true));
      }
    });
  };

  return (
    <>
      {logOutStatus && <LogoutDelete logOutStatus={logOutStatus} />}

     
        <div className="navbar bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-max"
              >
                <li>
                  <Link to={'/CreateQuiz'} className="bg-inherit  md:text-lg  hover:bg-gray-300 text-black">
                    Create Quiz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link className="btn btn-ghost normal-case text-xl text-black">
              AdminHome
            </Link>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://t.ly/Y31B" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-fit bg-white"
              >
                <li>
                  <a className="bg-inherit  md:text-lg  hover:bg-gray-300 text-black">
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className="bg-inherit md:text-lg  hover:bg-gray-300  text-black"
                    onClick={Handlelogout}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
     
    </>
  );
};
