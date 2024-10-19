import './SideBar.css'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { ToggleSidebarContext } from '../App';
import { useContext } from 'react';

import channel_1 from "../assets/channel_1.jpg";
import channel_2 from "../assets/channel_2.jpg";
import channel_3 from "../assets/channel_3.jpg";
import channel_4 from "../assets/channel_4.jpg";
import channel_5 from "../assets/channel_5.jpg";
import channel_6 from "../assets/channel_6.jpg";
import channel_7 from "../assets/channel_7.jpg";
import youtube_icon from "../assets/Youtube_logo.png";
import youtube_St_icon from "../assets/youtube-studio-icons.webp"
import youtube_MI_icon from "../assets/youtube-music-logo.png"
import youtube_kids_icon from "../assets/youtube_kids_icon.jpg"


const mainlinks = [
    {
        id: 1,
        name: "Home",
        icon: MdHomeFilled,
    },
    {
        id: 2,
        name: "Shorts",
        icon: SiYoutubeshorts,
    },
    {
        id: 3,
        name: "Subscriptions",
        icon: MdOutlineSubscriptions,
    }
];

const shortsLinks = [
    {
        id: 1,
        name: "Your Channel",
        icon: SwitchAccountOutlinedIcon,
    },
    {
        id: 2,
        name: "History",
        icon: HistoryIcon,
    },
    {
        id: 3,
        name: "Playlist",
        icon: PlaylistPlayIcon,
    },
    {
        id: 4,
        name: "Your Videos",
        icon: OndemandVideoIcon,
    },
    {
        id: 5,
        name: "Watch Later",
        icon: WatchLaterOutlinedIcon,
    },
    {
        id: 6,
        name: "Liked Videos",
        icon: ThumbUpOffAltOutlinedIcon,
    },
    {
        id: 7,
        name: "Your Clips",
        icon: ContentCutOutlinedIcon,
    }
]

const SubscriptionLinks = [
    {
        id: 1,
        name: "Ahmed Elbadawy",
        imgSrc: channel_1,
    },
    {
        id: 2,
        name: "New Media Academy Life",
        imgSrc: channel_2,
    },
    {
        id: 3,
        name: "History يامان ",
        imgSrc: channel_3,
    },
    {
        id: 4,
        name: "Elplatform - البلاتفورم",
        imgSrc: channel_4,
    },
    {
        id: 5,
        name: "Joe HaTTab",
        imgSrc: channel_5,
    },
    {
        id: 6,
        name: "Yehia Tech",
        imgSrc: channel_6,
    },
    {
        id: 7,
        name: "المواطن سعيد",
        imgSrc: channel_7,
    },
]

const exploreLinks = [
    {
        id: 1,
        name: "Trending",
        icon: WhatshotIcon,
    },
    {
        id: 2,
        name: "Music",
        icon: MusicNoteIcon,
    },
    {
        id: 3,
        name: "Live",
        icon: SensorsIcon,
    },
    {
        id: 4,
        name: "Gaming",
        icon: SportsEsportsIcon,
    },
    {
        id: 5,
        name: "Sports",
        icon: EmojiEventsIcon,
    }
]


const moreYoutubeLinks = [
    {
        id: 1,
        name: "YouTube Premium",
        imgSrc: youtube_icon,
    },
    {
        id: 2,
        name: "YouTube Studio",
        imgSrc: youtube_St_icon,
    },
    {
        id: 3,
        name: "YouTube Music",
        imgSrc: youtube_MI_icon,
    },
    {
        id: 4,
        name: "YouTube Kids",
        imgSrc: youtube_kids_icon,
    }
]

const youtubeAids = [
    {
        id: 1,
        name: "Settings",
        icon: SettingsOutlinedIcon,
    },
    {
        id: 2,
        name: "Report History",
        icon: OutlinedFlagIcon,
    },
    {
        id: 3,
        name: "Help",
        icon: HelpOutlineOutlinedIcon,
    },
    {
        id: 4,
        name: "Send feedback",
        icon: AnnouncementOutlinedIcon,
    }
]


const SideBar = () => {
    const [sidebarToggle,] = useContext(ToggleSidebarContext);
    return (
        <>
            {sidebarToggle ?
                <div className="full-sidebar hidden lg:block md:hidden xs:hidden h-[92vh] bg-[#0F0F0F] top-[60px] sticky scrollable w-[17%] pl-3 py-3 transition-all duration-200 ease-linear z-50">

                    <div className="main-links border-b-[1px] border-[#3c3c3c] pb-3">
                        {
                            mainlinks.map((link, index) => {
                                const IconComponent = link.icon;
                                return (
                                    <div
                                        key={link.id}
                                        className={`link-icon flex text-white items-center transition-all duration-75 ease-linear hover:bg-[#272727] px-4 py-2 rounded-md w-[90%] mt-[1px] cursor-pointer ${index === 0 ? 'bg-[#272727]' : ''}`}
                                    >
                                        <IconComponent className="text-2xl mr-6 block" />
                                        <p className="font-extralight text-[15px] block pt-1">{link.name}</p>
                                    </div>
                                );
                            })
                        }
                    </div>


                    <div className="user-links py-3 border-b-[1px] border-[#3c3c3c] pb-3">
                        <div className="home-icon flex text-white items-center bg-[#272727] px-4 py-2 rounded-md w-[90%] cursor-pointer">
                            <h1 className="mr-3 block font-semibold">You</h1>
                            <MdArrowForwardIos className="block text-sm" />
                        </div>
                        {
                            shortsLinks.map((link) => {

                                return (
                                    <div key={link.id} className="shorts-icon flex text-white items-center transition-all duration-75 ease-linear hover:bg-[#272727] px-4 py-2 rounded-md w-[90%] mt-[1px] cursor-pointer">
                                        <link.icon className="text-2xl mr-6 block" />
                                        <p className="font-extralight text-[15px] block pt-1">{link.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="subscriptions text-white  border-b-[1px] border-[#3c3c3c] pb-3">
                        <h1 className="mr-3 block font-semibold pl-4 py-3 pb-3">Subscriptions</h1>
                        <div className="channels">
                            {
                                SubscriptionLinks.map(link => {
                                    return (
                                        <div key={link.id} className="channel flex items-center mb-3  transition-all duration-75 ease-linear hover:bg-[#272727] px-4 py-2 rounded-md w-[90%] mt-[0.5px] cursor-pointer">
                                            <img src={link.imgSrc} className="w-6 h-6 rounded-full mr-6" alt="" />
                                            <p className="text-sm truncate">{link.name}</p>
                                        </div>
                                    )
                                })
                            }
                            <div className="channel flex items-center mb-3  transition-all duration-75 ease-linear hover:bg-[#272727] px-4 pl-2 py-2 rounded-md w-[90%] mt-[0.5px] cursor-pointer">
                                <RiArrowDownSLine className="text-3xl mr-6" />
                                <p className="text-sm truncate">Show More</p>
                            </div>
                        </div>
                    </div>

                    <div className="explore text-white border-b-[1px] border-[#3c3c3c] pb-3">
                        <h1 className="mr-3 block font-semibold pl-4 py-3 pb-3">Explore</h1>
                        <div className="items">
                            {
                                exploreLinks.map(link => {
                                    return (
                                        <>
                                            <div key={link.id} className="item flex items-center mb-3  transition-all duration-75 ease-linear hover:bg-[#272727] px-4 py-2 rounded-md w-[90%] mt-[0.5px] cursor-pointer">
                                                <link.icon className="text-2xl mr-6 block" />
                                                <p className="text-sm truncate">{link.name}</p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="youtube text-white border-b-[1px] border-[#3c3c3c] pb-3">
                        <h1 className="mr-3 block font-semibold pl-4 py-3 pb-3">More from YouTube</h1>
                        <div className="channels">
                            {
                                moreYoutubeLinks.map(link => {
                                    return (
                                        <div key={link.id} className="channel flex items-center mb-3  transition-all duration-75 ease-linear hover:bg-[#272727] px-4 py-2 rounded-md w-[90%] mt-[0.5px] cursor-pointer">
                                            <img src={link.imgSrc} className="w-6 mr-6" alt="" />
                                            <p className="text-sm truncate">{link.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="youtube-settings text-white border-b-[1px] border-[#3c3c3c] py-3 ">
                        {
                            youtubeAids.map((link) => {
                                return (
                                    <>
                                        <div key={link.id} className="shorts-icon flex text-white items-center transition-all duration-75 ease-linear hover:bg-[#272727] px-4 py-2 rounded-md w-[90%] mt-[1px] cursor-pointer">
                                            <link.icon className="text-2xl mr-6 block" />
                                            <p className="font-extralight text-[15px] block pt-1">{link.name}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="footer text-white border-b-[1px] border-[#3c3c3c] py-3">
                        <p className=" mr-3 text-sm text-[#8b8b8b] px-4 pl-4 py-2 pb-3 break-words">
                            About Press Copyright Contact us Creators Advertise Developers
                        </p>

                        <p className=" mr-3 text-sm text-[#8b8b8b] px-4 pl-4 py-2 pb-3 break-words">
                            Terms Privacy Policy & Safety How YouTube works Test new features
                        </p>

                        <p className='mr-3 text-xs text-[#706f6f] px-4 pl-4 py-2 pb-3 break-words'>
                            &copy; 2024 Google LLC
                        </p>
                    </div>
                </div>
                :
                <div className='mini-sidebar hidden lg:block md:block h-[94vh] bg-[#0F0F0F] sticky top-[60px] w-[79px] py-5 px-2 transition-all duration-75 ease-linear z-50'>
                    <div className="sidebar-rows flex justify-center items-center flex-col gap-1 ">
                        <div className="col flex justify-center items-center text-white flex-col p-3 gap-1 transition-all duration-75 ease-linear hover:bg-[#272727] rounded-md cursor-pointer">
                            <MdHomeFilled className='text-[24px]' />
                            <h1 className='text-[10px]'>Home</h1>
                        </div>

                        <div className="col flex justify-center items-center text-white flex-col p-3 gap-1 transition-all duration-75 ease-linear hover:bg-[#272727] rounded-md cursor-pointer">
                            <SiYoutubeshorts className='text-[24px]' />
                            <h1 className='text-[10px]'>Shorts</h1>
                        </div>

                        <div className="col flex justify-center items-center text-white flex-col py-3 gap-1 transition-all duration-75 ease-linear hover:bg-[#272727] rounded-md cursor-pointer">
                            <MdOutlineSubscriptions className='text-[24px]' />
                            <h1 className='text-[10px]'>Subscriptions</h1>
                        </div>

                        <div className="col flex justify-center items-center text-white flex-col p-3 gap-1 transition-all duration-75 ease-linear hover:bg-[#272727] rounded-md cursor-pointer">
                            <SwitchAccountOutlinedIcon className='text-[24px]' />
                            <h1 className='text-[10px]'>You</h1>
                        </div>
                    </div>
                </div>}



        </>

    );
};

export default SideBar;
