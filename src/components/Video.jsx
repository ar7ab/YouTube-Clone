import { Link } from 'react-router-dom';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { abbreviateNumber } from "js-abbreviation-number";
import VideoDuration from './VideoDuration';



const Video = ({ video }) => {


  return (
    <div className="text-white">
      <Link to={`/video/${video?.video?.videoId}`}>
        <div className="flex flex-col">
          <div className="relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.video?.thumbnails[0]?.url}
              alt="Video Thumbnail"
            />
            <div>
              <span className='absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md'>
                <VideoDuration lengthSeconds={video?.video?.lengthSeconds} />
              </span>
            </div>
          </div>

          {/* Channel logo & title */}
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img
                  className="h-full w-full rounded-full overflow-hidden"
                  src={video?.video?.author?.avatar?.[0]?.url || 'default-avatar-url'}
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-[#AAAAAA]">
                {video?.video?.author?.avatar?.title || "Channel Name"}
                {(
                  video?.video?.author?.badges[0]?.text === "Verified") && (
                    <IoCheckmarkCircleSharp className='text-[#AAAAAA] ml-2 text-sm' />
                  )}
              </span>


              <div className="flex text-[#AAAAAA] text-[12px]">
                <span>{abbreviateNumber(video?.video?.stats?.views) || 0} views</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">.</span>
                <span>{video?.video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
