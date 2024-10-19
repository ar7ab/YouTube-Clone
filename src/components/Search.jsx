import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import ListItems from './ListItems';
import { useParams, Link } from 'react-router-dom';
import { fetchData } from '../utils/RapidApi';
import { abbreviateNumber } from 'js-abbreviation-number';
import VideoDuration from './VideoDuration';
import userImg from '../assets/userIcon.png';

const Search = () => {
  const [searchVideos, setSearchVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useParams();

  useEffect(() => {
    const fetchSearchResult = () => {
      setLoading(true);
      fetchData(`search/?q=${searchQuery}`)
        .then(({ contents }) => {
          if (contents && contents.length > 0) {
            setSearchVideos(contents);
          } else {
            setSearchVideos([]);
          }
        })
        .catch(err => {
          console.error("Error fetching search results:", err);
          setSearchVideos([]);
        })
        .finally(() => setLoading(false));
    };

    fetchSearchResult();
  }, [searchQuery]);

  if (loading) {
    return <div className="text-white">Loading...</div>; // Simple loading indicator
  }

  return (
    <div className="flex flex-col bg-[#0F0F0F] px-5 md:px-0">
      <div className="flex flex-row gap-10">
        <SideBar />
        <div className="inner-content flex flex-col w-full overflow-hidden">
          <ListItems />
          <div className="search-videos grid grid-cols-1 gap-5 mt-4">
            {searchVideos.length > 0 ? (
              searchVideos.map((video) => (
                video?.video?.videoId ? (
                  <div className="video" key={video.video.videoId}>
                    <Link to={`/video/${video.video.videoId}`}>
                      <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                        <div className="relative h-60 rounded-xl hover:rounded-none duration-200 overflow-hidden">
                          <img
                            className="h-full w-full"
                            src={video?.video?.thumbnails?.[0]?.url || 'path/to/default-thumbnail.jpg'} // Fallback for thumbnail
                            alt="Video Thumbnail"
                          />
                          <div>
                            <span className="absolute bottom-2 right-2 bg-black text-white md:px-2 md:py-1 text-xs rounded-md">
                              <VideoDuration lengthSeconds={video?.video?.lengthSeconds} />
                            </span>
                          </div>
                        </div>

                        {/* Channel logo & title */}
                        <div className="flex mt-3 flex-col space-x-2">
                          <div className="flex flex-col items-start text-white">
                            <div>
                              <span className="text-sm md:text-lg font-normal line-clamp-2">
                                {video?.video?.title || 'Video Title Unavailable'}
                              </span>
                            </div>
                            <div className="flex text-[#AAAAAA] text-[12px]">
                              <span>{abbreviateNumber(video?.video?.stats?.views) || 0} views</span>
                              <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">.</span>
                              <span>{video?.video?.publishedTimeText || 'Time Unavailable'}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="flex h-7 w-7 rounded-full overflow-hidden border">
                                <img
                                  className="h-full w-full"
                                  src={video?.video?.author?.avatar?.[0]?.url || userImg}
                                  alt="Channel Avatar"
                                />
                              </div>
                              <div className="flex font-semibold text-[12px] text-[#AAAAAA]">
                                {video?.video?.author?.title || "Channel Name"}
                              </div>
                            </div>
                            <div className='md:flex font-semibold text-[12px] hidden mt-4 text-[#AAAAAA]'>
                              {video?.video?.descriptionSnippet || "video description"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null
              ))
            ) : (
              <div className="text-white">No videos found.</div> // Message when no videos are available
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
