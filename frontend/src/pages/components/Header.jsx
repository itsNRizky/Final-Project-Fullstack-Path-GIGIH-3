import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    setAuthUser({});
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div className="navbar bg-green-500 mb-5 z-20 h-[8vh]">
      <div className="flex-1">
        <Link to={"/"} className="font-bold text-white text-2xl">
          TokPlay
        </Link>
      </div>
      <div className="flex-none">
        {isLoggedIn ? (
          <>
            <p className="text-white mr-3">{authUser.username}</p>
            <div className="avatar mr-3">
              <div className="w-10 border-2 rounded-full">
                <img src={authUser.image} />
              </div>
            </div>
            <button
              className="btn bg-red-500 text-white border-0 hover:bg-red-800"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </>
        ) : (
          <Link className="btn text-green-600" to={"/login"}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
