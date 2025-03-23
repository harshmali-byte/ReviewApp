import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";

const Header = () => {
  return (
    <nav className="flex items-center justify-between h-[75px]  w-[100%] shadow-md  bg-[#ffffff ] shadow">
      {/* Custom class for styling */}

      <div className="w-[200px] h-[40px] ml-[80px]  ">
        {" "}
        <StarsIcon className="text-purple-700  !w-[40px] !h-[40px] " />
        <span className="text-[24px] font-normal"> Review</span>
        <span className="text-[24px] ">&</span>
        <span className="text-[24px] font-bold">Rate</span>
      </div>

      <div className="flex ml-[40%] items-center justify-between p-2 border-[1px] border-[#CDCDCD] rounded-sm !w-[384px] !h-[37px] ">
        <input
          className="outline-none text-[15px] font-normal w-40 md:w-60"
          type="text"
          placeholder="Search..."
        />
        <FaSearch className="text-gray-500" />
      </div>
      <div className="flex mr-[80px] space-x-4">
        <Link to="/signup" className="text-[#000000] !w-[60px] !h-[26px] text-[17px] font-normal"> 
          SignUp
        </Link>
        <Link to="/login" className="text-[#000000] !w-[45px] !h-[26px] text-[17px] font-normal">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
