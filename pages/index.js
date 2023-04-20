import SideBar from '../components/sidebar';
import Main from '../main/main'
const index = () => {
  return (
    <div className="flex ">
      <aside>
        <SideBar />
      </aside>
      <div className='w-full'>
        <Main />
      </div>
    </div>
  );
};

export default index;
