import { HiBars3 } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import MicIcon from "@mui/icons-material/Mic";
import Logo from "../assets/Youtube_logo.png";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { useContext, useState } from "react";
import { ToggleSidebarContext } from "../App";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [, setSidebarToggle] = useContext(ToggleSidebarContext);
    const [searchQuery, setSearchQuery] = useState(null);
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if ((event?.key === "Enter" || event === "searchBtn") && searchQuery?.length > 0) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery("");
        }
    };


    return (
        <div className="navbar sticky top-0 bg-[#0F0F0F] flex items-center justify-between h-[60px] z-50 px-5 py-2">
            {/* Left Section */}
            <div className="navbar-left flex items-center w-auto md:w-[20%] mr-7">
                <div
                    onClick={() => setSidebarToggle((sidebarToggle) => !sidebarToggle)}
                    className="navToggleBtn mr-5 cursor-pointer h-[41.5px] w-[41.5px] hidden hover:bg-[#272727] md:flex items-center justify-center rounded-full"
                    aria-label="Toggle Navigation"
                >
                    <HiBars3 className="text-white text-2xl hidden md:block" />
                </div>

                <div className="logo text-white flex items-center  cursor-pointer">
                    <img src={Logo} className="w-5 md:w-6 mr-[2px]" alt="Logo" />
                    <div className="text relative">
                        <p className="tracking-[-0.07em] text-sm md:text-xl font-semibold">YouTube</p>
                        <span className="text-[9px] md:text-[11px] text-[#959393] absolute top-[-2px] right-[-13px] md:top-[-3px] md:right-[-18px]">
                            EG
                        </span>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className="navbar-middle flex items-center flex-grow justify-center px-2 md:px-0">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={searchQueryHandler}
                    value={searchQuery}
                    className="w-[170px] md:w-auto pr-[20px] text-sm py-1.5 md:pr-[350px] md:py-2.5 text-[#777] bg-[#151515] rounded-l-full border focus:text-white border-[#424242] pl-4 border-r-0 focus:outline-none focus:border-blue-500 focus:border-r"
                />
                <button
                    className="bg-[#222222] text-white py-1 px-2 md:py-2 md:px-5 rounded-r-full border border-[#424242]"
                    onClick={() => searchQueryHandler("searchBtn")}
                >
                    <IoMdSearch className="text-2xl text-[#FFFFFF]" />
                </button>
                <div className="microphone hidden md:flex cursor-pointer h-[41.5px] w-[41.5px] bg-[#272727] items-center justify-center rounded-full ml-4">
                    <MicIcon className="text-[#ffffff]" />
                </div>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex justify-center items-center gap-3 mr-6">
                <div className="create-icon cursor-pointer h-[41.5px] w-[41.5px] hover:bg-[#272727] flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out">
                    <VideoCallOutlinedIcon className="text-[#ffffff] text-4xl" />
                </div>
                <div className="notification-icon cursor-pointer h-[41.5px] w-[41.5px] relative hover:bg-[#272727] flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out">
                    <NotificationsNoneOutlinedIcon className="text-[#ffffff] text-4xl" />
                    <span className="text-white bg-[#CC0000] px-1 absolute top-[7px] right-[-1px] rounded-full w-fit text-xs">
                        9+
                    </span>
                </div>
                <div className="user-avatar cursor-pointer h-[41.5px] w-[41.5px] hover:bg-[#272727] flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out">
                    <PermIdentityOutlinedIcon className="text-[#ffffff] text-4xl" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
