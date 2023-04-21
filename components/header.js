/* eslint-disable @next/next/no-img-element */
const header = () => {
  return (
    <header className=" flex  w-full  text-white px-5 pt-3 font-jost">
      {/* Search Box */}
      <div className="flex  items-center gap-x-2 text-center w-3/4 h-10 border border-yellow-200 rounded-lg">
        <img
          className="object-contain ml-2"
          src="/header/Search.png"
          alt="img"
        />
        <p className="font-extralight text-gray-400 text-sm">Search by Sample, Kits, Creators...</p>
      </div>
      {/* Profile */}
      <div className="w-1/4 flex justify-center gap-x-3 ">
        <img className="w-11 h-11 object-contain" src="/header/Profile.png" alt="img" />
        <div>
          <p>Katherine Petrova</p>
          <p className="font-extralight">@girl_in_tech</p>
        </div>
        <img className="object-contain" src="/header/Dropdown.png" alt="img" />
      </div>
    </header>
  );
};

export default header;
