import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from 'react-router-dom';
import { IoMdMore } from "react-icons/io";
import VideoDuration from './VideoDuration';

const RelatedVideo = ({ video }) => {
    return (
        <Link to={`/video/${video?.video?.videoId}`}>
            <div className="video flex flex-col md:flex-row w-full gap-2">
                <div className="relative sm:h-60 sm:w-auto md:h-auto md:w-[50%] rounded-xl hover:rounded-none duration-200 overflow-hidden">
                    <img
                        className="h-full w-full"
                        src={video?.video?.thumbnails?.[0]?.url || 'path/to/default-thumbnail.jpg'} // Fallback thumbnail
                        alt="Video Thumbnail"
                    />
                    <div>
                        <span className='absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md'>
                            <VideoDuration lengthSeconds={video?.video?.lengthSeconds} />
                        </span>
                    </div>
                </div>
                <div className="info w-auto md:w-[30%] flex flex-col text-white flex-1 text-sm py-0.3 gap-2">
                    <div className="video-title break-words line-clamp-2">
                        {video?.video?.title || "Video Title Unavailable"}
                    </div>
                    <div className="channel-title text-xs text-[#A5A5A5]">
                        {video?.video?.author?.title || "Channel Name Unavailable"}
                    </div>
                    <div className="video-details flex text-[#AAAAAA] text-[10px] md:text-[11px]">
                        <span>{abbreviateNumber(video?.video?.stats?.views) || 0} views</span>
                        <span className="flex text-[10px] md:text-xs leading-none font-bold relative mx-1">.</span>
                        <span>{video?.video?.publishedTimeText || "Time Unavailable"}</span>
                    </div>
                </div>
                <div className="more-icon text-xl text-white py-0.3 hidden md:block">
                    <IoMdMore />
                </div>
            </div>
        </Link>
    );
}

export default RelatedVideo;
