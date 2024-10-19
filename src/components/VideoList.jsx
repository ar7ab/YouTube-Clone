import React, { useContext } from 'react';
import Video from './Video';
import { useAuth } from '../context/AuthProvider';
import { ToggleSidebarContext } from '../App';

const VideoList = () => {
    const [sidebarToggle] = useContext(ToggleSidebarContext);
    const { data, loading, error } = useAuth(); // Assume loading and error are part of the context

    if (loading) {
        return <div className="text-white">Loading videos...</div>; // Loading state
    }

    if (error) {
        return <div className="text-red-500">Error loading videos: {error.message}</div>; // Error state
    }

    if (!data || data.length === 0) {
        return <div className="text-white">No videos available.</div>; // No data available
    }

    return (
        <div className={`grid w-full grid-cols-1 ${sidebarToggle ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-5 p-5`}>
            {data.map(item => (
                <Video key={item?.video?.videoId} video={item} />
            ))}
        </div>
    );
}

export default VideoList;
