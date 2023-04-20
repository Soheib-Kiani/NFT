/* eslint-disable @next/next/no-img-element */
const sidebar = () => {
  return (
    <div className="h-screen bg-black w-52 font-jost">
      {/* Sidebar Icon */}
      <div className="grid place-items-center pt-5">
        <img src="/side-icon/Group 2.png" alt="img" />
      </div>
      {/* Market plavce Buttons */}
      <p className="text-white font-extralight mt-7 uppercase">Marketplace</p>
      <div className="grid place-items-center gap-y-1">
        {/* #1 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img src="/side-icon/Category.png" alt="img" />
          <p className="text-white">Explore</p>
        </div>
        {/* #2 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img src="/side-icon/Activity.png" alt="img" />
          <p className="text-white">Active Bides</p>
        </div>
        {/* #3 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img src="/side-icon/Heart.png" alt="img" />
          <p className="text-white">Favourite</p>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
