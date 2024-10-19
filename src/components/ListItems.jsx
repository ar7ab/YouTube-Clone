import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ListItems.css'

const ListItems = () => {
    const tags = [
        { name: 'All', bgColor: 'bg-white', textColor: 'text-black', fontWeight: 'font-normal' },
        { name: 'Music' },
        { name: 'Mixes' },
        { name: 'Source Code' },
        { name: 'Gaming' },
        { name: 'Arab Music' },
        { name: 'Podcasts' },
        { name: 'Hans Zimmer' },
        { name: 'Playlists' },
        { name: 'History' },
        { name: 'Music Arrangements' },
        { name: 'Live' },
        { name: 'Healthy Recipes' },
        { name: 'Home Organization' },
        { name: 'Online Courses' },
        { name: 'History Lessons' },
        { name: 'Educational Videos' },
        { name: 'Career Advice' },
        { name: 'Study Tips' },
        { name: 'Meditation' },
        { name: 'Life Hacks' },
    ];

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex items-center w-full overflow-hidden">
            <button onClick={scrollLeft} className="p-2 hover:bg-[#272727] rounded-full">
                <FaChevronLeft className="text-white text-sm" />
            </button>
            <div
                ref={scrollRef}
                className="flex flex-row w-full overflow-x-auto text-white gap-3 px-2 pt-2 pb-2 h-fit whitespace-nowrap scrollbar-hide">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className={`text-sm px-2.5 py-1 ${tag.fontWeight || 'font-semibold'} rounded-md whitespace-nowrap ${tag.bgColor || 'bg-[#272727]'} ${tag.textColor || 'text-white'} hover:bg-[#3F3F3F] cursor-pointer`}>
                        {tag.name}
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} className="p-2 hover:bg-[#272727] rounded-full">
                <FaChevronRight className="text-white text-sm" />
            </button>
        </div>
    );
};

export default ListItems;
