import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["access_token"]);
  const logout = () => {
    setCookie("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth/login");
  };
  return (
    <>
      {!cookies.access_token ? (
        <>
          <div className="flex justify-between px-4 text-orange-500 bg-black py-2 items-center rounded-md">
            <div className="text-3xl font-extrabold animate-bounce">
              Gourmet-Guide
            </div>
            <div>
              <ul className="flex gap-14">
                <Link to="/">
                  {" "}
                  <li className="hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg ">
                    Home
                  </li>
                </Link>
                <li className="p-2">|</li>
                <Link to="/search">
                  {" "}
                  <li className="hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg ">
                    Search
                  </li>
                </Link>
                {/* <li className="p-2">|</li>
                <Link to="/create">
                  <li className=" hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg">
                    Create
                  </li>
                </Link> */}
                {/* <li className='p-2'>|</li>
            <Link to='/save'><li className='hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg'>Saved</li></Link> 
             */}
              </ul>
            </div>
            <div >
              <div></div>
            </div>
            <ul className="flex gap-5 items-center">
            <li className="hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg">
              {" "}
              <Link to="auth/login"> Login </Link>
            </li>
            <li> |</li>
            <li className="hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg">
              {" "}
              <Link to="auth/register"> Register </Link>
            </li>
          </ul>
          </div>

         
        </>
      ) : (
        <>
          <div className="flex justify-between px-4 text-orange-500 bg-black py-2 items-center rounded-md">
            <div className="text-3xl font-extrabold animate-bounce">
              Gourmet-Guide
            </div>
            <div>
              <ul className="flex gap-14">
                <Link to="/">
                  {" "}
                  <li className="hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg ">
                    Home
                  </li>
                </Link>
                <li className="p-2">|</li>
                <Link to="/create">
                  <li className=" hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg">
                    Create
                  </li>
                </Link>
                <li className="p-2">|</li>
                <Link to="/save">
                  <li className="hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg">
                    Saved
                  </li>
                </Link>
                <li className="p-2">|</li>
                <Link to="/search">
                  {" "}
                  <li className="hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg ">
                    Search
                  </li>
                </Link>
              </ul>
            </div>
            <div >
              <div></div>
            </div>
            <button className='hover:cursor-pointer hover:bg-orange-500 hover:text-black p-2 rounded-lg' onClick={logout}>Logout</button>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
