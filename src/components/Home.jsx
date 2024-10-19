import SideBar from './SideBar';
import ListItems from './ListItems';
import VideoList from './VideoList';

const Home = () => {

  return (
    <div className="flex flex-col bg-[#0F0F0F]">
      <div className="flex flex-row ">
        <SideBar />
        <div className="inner-content flex flex-col gap-3 w-full overflow-hidden">
          <ListItems />
          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
