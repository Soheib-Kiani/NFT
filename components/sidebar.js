/* eslint-disable @next/next/no-img-element */
const sidebar = () => {
  return (
    <div className="min-h-screen bg-black text-sm w-52 font-jost border-r-2 border-r-yellow-300 ">
      {/* Sidebar Icon */}
      <div className="grid place-items-center pt-3">
        <img
          className="object-contain"
          src="/side-icon/Group 2.png"
          alt="img"
        />
      </div>
      {/* Marketplace Buttons */}
      <p className="text-white pl-1 font-extralight mt-5 uppercase">
        marketplace
      </p>
      <div className="grid place-items-center gap-y-1">
        {/* #1 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Category.png"
            alt="img"
          />
          <p className="text-white">Explore</p>
        </div>
        {/* #2 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Activity.png"
            alt="img"
          />
          <p className="text-white">Active Bides</p>
        </div>
        {/* #3 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Heart.png"
            alt="img"
          />
          <p className="text-white">Favourite</p>
        </div>
      </div>
      {/* ____________ */}
      {/* Create Buttons */}
      <p className="text-white pl-1 font-extralight mt-5 uppercase">create</p>
      <div className="grid place-items-center gap-y-1">
        {/* #1 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img className="object-contain" src="/side-icon/Plus.png" alt="img" />
          <p className="text-white">Upload New</p>
        </div>
        {/* #2 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Download.png"
            alt="img"
          />
          <p className="text-white">Import NFT</p>
        </div>
        {/* #3 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Paper Negative.png"
            alt="img"
          />
          <p className="text-white">Create Empty Kit</p>
        </div>
      </div>
      {/* ____________ */}
      {/* Playlist Buttons */}
      <p className="text-white pl-1 font-extralight mt-5 uppercase">create</p>
      <div className="grid place-items-center gap-y-1">
        {/* #1 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img className="object-contain" src="/side-icon/Play.png" alt="img" />
          <p className="text-white">Sample Music</p>
        </div>
        {/* #2 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Voice.png"
            alt="img"
          />
          <p className="text-white">Your Top Songs</p>
        </div>
        {/* #3 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Discovery.png"
            alt="img"
          />
          <p className="text-white">Discover Weekly</p>
        </div>
      </div>
      {/* ____________ */}
      {/* General Buttons */}
      <p className="text-white pl-1 font-extralight mt-11 uppercase">general</p>
      <div className="grid place-items-center gap-y-1">
        {/* #1 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Setting.png"
            alt="img"
          />
          <p className="text-white">Setting</p>
        </div>
        {/* #2 */}
        <div className="flex w-full mt-3 items-start px-5 gap-x-3 text-center">
          <img
            className="object-contain"
            src="/side-icon/Logout.png"
            alt="img"
          />
          <p className="text-white">Sign out</p>
        </div>
      </div>
      {/* ____________ */}
    </div>
  );
};

export default sidebar;
