import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/RapidApi";
import ReactPlayer from "react-player";
import userImg from '../assets/userIcon.png';
import { BiLike, BiDislike } from "react-icons/bi";
import { IoMdShareAlt, IoIosMore } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { abbreviateNumber } from "js-abbreviation-number";
import TimeAgo from "../Loader/TimeAgo";
import { MdSort } from "react-icons/md";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { BsEmojiLaughingFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import RelatedVideo from "./RelatedVideo";
import { IoMdMore } from "react-icons/io";
import { ToggleSidebarContext } from "../App";

function PlayingVideo() {
  const [video, setVideo] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [commentsDetails, setCommentsDetails] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await fetchData(`video/details/?id=${id}`);
        setVideo(res);
      } catch (error) {
        console.error("Failed to fetch video details", error);
      }
    };

    const fetchVideoCommentsDetails = async () => {
      try {
        const res = await fetchData(`video/comments/?id=${id}`);
        setCommentsDetails(res.comments);
      } catch (error) {
        console.error("Failed to fetch video details", error);
      }
    };

    const fetchRelatedVideoDetails = async () => {
      try {
        const res = await fetchData(`video/related-contents/?id=${id}`);
        setRelatedVideos(res.contents);
      } catch (error) {
        console.error("Failed to fetch video details", error);
      }
    };

    fetchRelatedVideoDetails();
    fetchVideoCommentsDetails();
    fetchVideoDetails();
  }, [id]);

  console.log(commentsDetails);


  const [isFocused, setIsFocused] = useState(false);
  const addCommentInputRef = useRef();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative flex h-auto flex-col md:flex-row gap-6 justify-between bg-[#0F0F0F] md:pt-6  md:px-[6.5%] w-full">
      <div className="video-section w-full md:w-[69%]">
        {/* Video Player */}
        <div className="video overflow-hidden md:rounded-xl w-full md:h-[500px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            height="100%"
            width="100%"
            controls
            style={{ backgroundColor: "#000000" }}
            playing={true}
          />
        </div>

        {/* Video Information */}
        <div className="video-info text-white px-3 md:px-0">
          <div className="info-rows w-full">
            <h1 className="video-title font-bold text-sm md:text-xl mt-3 line-clamp-2">
              {video?.title || "Video Title Unavailable"}
            </h1>
            <div className="w-full video-details text-[11px] flex text-[#A0A0A0]  flex-row md:hidden">
              <span className="mr-2">{abbreviateNumber(video?.stats?.views, 2)} Views</span>
              <TimeAgo dateString={video?.publishedDate} />
            </div>

            {/* Channel and Interaction Section large screen */}
            <div className="channel-data justify-between flex-col items-center md:flex-row mt-4 hidden md:flex">
              <div className="flex">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full rounded-full"
                      src={video?.author?.avatar?.[0]?.url || userImg}
                      alt="Channel Avatar"
                    />
                  </div>
                </div>

                <div className="flex space-x-5">
                  <div className="flex flex-col ml-3">
                    <div className="text-sm break-words font-semibold truncate flex items-center">
                      {video?.author?.title || "Channel Name"}
                    </div>

                    <div className="text-[14px] text-[#A0A0A0]">
                      {video?.author?.stats?.subscribersText || "1M subscribers"}
                    </div>
                  </div>

                  <div className="flex flex-row gap-2">
                    <span className="mt-1 text-center bg-white px-4 h-9 flex items-center text-sm rounded-full font-semibold text-black cursor-pointer hover:bg-[#D9D9D9] duration-200">
                      Subscribe
                    </span>
                  </div>

                </div>
              </div>

              <div className="flex mt-4 md:mt-0">
                <div className="flex items-center justify-center h-9 w-fit px-6 rounded-3xl transition-all duration-200 ease-linear bg-[#2F2F2F] hover:bg-[#595959] cursor-pointer">
                  <BiLike className="text-white text-4xl pr-4" />
                  <span className="pr-3">
                    {abbreviateNumber(video?.stats?.likes, 2) ?? 0}
                  </span>

                  <BiDislike className="text-white text-4xl pl-4 border-l border-white/[0.15]" />
                </div>
                <div className="flex items-center justify-center h-9 px-6 rounded-3xl bg-[#2F2F2F] transition-all duration-200 ease-linear hover:bg-[#595959] cursor-pointer ml-2">
                  <IoMdShareAlt className="text-white text-2xl pr-1" />
                  <span>Share</span>
                </div>
                <div className="flex items-center justify-center h-9 px-6 rounded-3xl bg-[#2F2F2F] transition-all duration-200 ease-linear hover:bg-[#595959] cursor-pointer ml-2">
                  <LiaDownloadSolid className="text-white text-2xl pr-1" />
                  <span>Download</span>
                </div>
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2F2F2F] transition-all duration-200 ease-linear hover:bg-[#595959] cursor-pointer ml-2">
                  <IoIosMore className="text-white text-2xl" />
                </div>
              </div>
            </div>

            {/* Channel and Interaction Section mobile screen */}
            <div className="channel-data flex-row md:hidden my-4 flex justify-between items-center">
              <div className="channel-info flex flex-row items-center">
                <div className="flex h-6 w-6 rounded-full overflow-hidden mr-4">
                  <img
                    className="h-full w-full rounded-full"
                    src={video?.author?.avatar?.[0]?.url || userImg}
                    alt="Channel Avatar"
                  />
                </div>
                <h1 className="channel-title text-white text-sm mr-2">
                  {video?.author?.title || "Channel Name"}
                </h1>
                <p className="num-subscriptions text-[#A0A0A0] text-xs">
                  {video?.author?.stats?.subscribersText || "1M"}
                </p>
              </div>
              <div className="subscribe-btn flex flex-row gap-2">
                <span className=" text-center bg-white px-4 h-8 flex items-center text-sm rounded-full text-black cursor-pointer hover:bg-[#D9D9D9] duration-200">
                  Subscribe
                </span>
              </div>
            </div>

            {/* channel Btn mobile screen */}
            <div className="btns md:hidden flex flex-row justify-between">
              <div className="text-white flex flex-row items-center bg-[#272727] px-3 py-1 rounded-full cursor-pointer transition-all duration-200 ease-linear hover:bg-[#595959]">
                <BiLike className="mr-1" />
                <span className="mr-1 pr-2 border-r border-gray-600 text-xs">
                  {typeof video?.stats?.likes === 'number' && !isNaN(video?.stats?.likes)
                    ? abbreviateNumber(video?.stats?.likes, 2)
                    : 0}
                </span>

                <BiDislike />
              </div>

              <div className="flex flex-row items-center bg-[#272727] px-3 py-1 rounded-full cursor-pointer text-white transition-all duration-200 ease-linear hover:bg-[#595959]">
                <IoMdShareAlt className="text-white text-xl pr-1" />
                <span className="text-xs">Share</span>
              </div>

              <div className="flex flex-row items-center bg-[#272727] px-3 py-1 rounded-full cursor-pointer text-white transition-all duration-200 ease-linear hover:bg-[#595959]">
                <LiaDownloadSolid className="text-white text-xl pr-1" />
                <span className="text-xs">Download</span>
              </div>

              <div className="flex items-center justify-center p-2 rounded-full bg-[#272727] transition-all duration-200 ease-linear hover:bg-[#595959] cursor-pointer ">
                <IoIosMore className="text-white text-xl" />
              </div>

            </div>


            {/* Video Description */}
            <div className="video-description bg-[#272727] w-full py-3 px-2 my-4 rounded-xl">
              <div className="w-full video-details md:flex flex-row text-[14px] px-3 hidden ">
                <span className="mr-2">{abbreviateNumber(video?.stats?.views, 2)} Views</span>
                <TimeAgo dateString={video?.publishedDate} />
              </div>
              <div className="my-2 px-3 break-all text-xs line-clamp-6">
                {video?.description}
              </div>
            </div>

            {/* Comments Section */}
            <div className="video-comments">
              <div className="comments-number flex flex-row gap-10 items-center mt-2 md:mt-7 mb-2">
                <span className="text-sm md:text-xl font-bold">{abbreviateNumber(video?.stats?.comments, 2) || 0} Comments</span>
                <span className="flex flex-row gap-2 items-center">
                  <MdSort className="text-2xl" />
                  <span className="font-semibold">Sort by</span>
                </span>
              </div>

              {/* Add a Comment */}
              <div className="add-comment flex w-full h-fit justify-center items-center py-4 md:py-8">
                <div className="flex items-center justify-center user-icon h-8 w-8 md:h-11 md:w-11 mr-4 rounded-full bg-[#272727]">
                  <PermIdentityOutlinedIcon className="text-[10px] md:text-2xl text-white" />
                </div>
                <div className="text-input flex flex-col flex-grow">
                  <input
                    ref={addCommentInputRef}
                    type="text"
                    className="w-full text-[#A5A5A5] md:text-[17px] text-sm bg-transparent border-b border-[#A5A5A5] focus:outline-none focus:border-white"
                    placeholder="Add a comment..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  <div className={`row items-center justify-between mt-2 ${isFocused ? 'flex' : 'hidden'}`}>
                    <div className="emoji p-3 ml-1 rounded-full hover:bg-[#272727] transition-all duration-200 ease-in-out cursor-pointer">
                      <BsEmojiLaughingFill />
                    </div>
                    <div className="btns flex items-center">
                      <button className="mr-4 hover:bg-[#272727] px-3 py-2 rounded-3xl transition-all duration-200 ease-in-out">
                        Cancel
                      </button>
                      <button className="bg-[#272727] px-3 py-2 rounded-3xl hover:bg-[#65B8FF] hover:text-black transition-all duration-200 ease-in-out">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="comments-box w-full flex flex-col">
                {commentsDetails?.map((comment, index) => (
                  <div key={index} className="comment flex flex-row my-2">
                    <div className="comment-authorImg w-[30px] h-[30px] md:w-[44px] md:h-[44px] mr-4 rounded-full overflow-hidden">
                      <img src={comment?.author?.avatar[0]?.url} alt="user img" />
                    </div>
                    <div className="comment-content flex flex-col gap-1 flex-1">
                      <div className="author-info flex flex-row text-[12px] md:text-[14px] items-center gap-1">
                        <span>{comment?.author?.title}</span>
                        <span className="text-[10px] text-[#A5A5A5]">.</span>
                        <span className="text-[10px] md:text-[12px] text-[#A5A5A5]">{comment?.publishedTimeText}</span>
                      </div>
                      <div className="comment-text text-[12px] md:text-[14px] break-all">
                        {comment?.content}
                      </div>
                      <div className="comment-interaction flex flex-row gap-4 items-center">
                        <div className="like flex flex-row gap-1 items-center">
                          <div className="like-icon w-[32px] h-[32px] rounded-full text-white cursor-pointer hover:bg-[#595959] duration-200 flex items-center justify-center">
                            <BiLike className="text-lg" />
                          </div>
                          <span className="text-[12px] text-[#A5A5A5]">{comment?.stats?.votes}</span>
                        </div>
                        <div className="dislike flex flex-row gap-1 items-center">
                          <div className="like-icon w-[32px] h-[32px] rounded-full text-white cursor-pointer hover:bg-[#595959] duration-200 flex items-center justify-center">
                            <BiDislike className="text-lg" />
                          </div>
                        </div>
                        <span className="text-[12px] py-2 px-3 rounded-full text-white cursor-pointer hover:bg-[#595959] duration-200 flex items-center justify-center">Reply</span>
                      </div>
                      <div className="replies flex flex-row text-[#3C9DF0] py-1 px-2 pr-4 rounded-full cursor-pointer hover:bg-[#263850] duration-200 w-fit text-[14px] items-center justify-center">
                        {comment?.stats?.replies > 0 && (
                          <>
                            <MdKeyboardArrowDown className="text-2xl mr-2" />
                            <span className="mr-1 text-[12px]">{comment?.stats?.replies}</span>
                          </>
                        )}
                        <span className="text-[12px]">
                          {comment?.stats?.replies > 1
                            ? "replies"
                            : comment?.stats?.replies == 1
                              ? " reply"
                              : ""}
                        </span>
                      </div>

                    </div>
                    <div className="more-icon text-xl text-white py-0.3 ml-5 pt-2 cursor-pointer">
                      <IoMdMore />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="suggestion-videos w-full  md:w-[30%] flex gap-5 md:gap-3 flex-col px-5">
        {relatedVideos?.length > 0 ? (
          relatedVideos.map((video) => (
            <RelatedVideo key={video?.videoId} video={video} />
          ))
        ) : (
          <p>No related videos available</p>
        )}
      </div>
    </div>
  );
}

export default PlayingVideo;
