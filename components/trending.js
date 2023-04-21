/* eslint-disable @next/next/no-img-element */
const trending = () => {
  return (
    <div className="w-full px-5">
      {/* Trending Today */}
      <div className="flex justify-between uppercase text-white font-azonix text-lg mb-1 mt-3">
        <p className="w-2/3">trending today</p>

        <p className="w-1/3">recent activity</p>
      </div>

      <div className="flex h-80 text-white">
        <div className="flex  w-2/3 border border-yellow-300 rounded-md ">
          <div className="w-1/3  rounded-l-md bg-gradient-to-r  from-[#3D4618] to-[#2A2F14]">
            <img
              className="object-cover h-full"
              src="/trending/nft.png"
              alt="img"
            />
          </div>
          {/* Details */}
          <div className="w-1/3 flex text-lg flex-col justify-around ml-4">
            {/*Billie eilish  */}
            <div className="font-azonix">
              <p className="text-[#2A2F14]  uppercase">Billie eilish</p>
              <p>#21v98</p>
            </div>
            {/* Creator */}
            <div className="font-jost">
              <p className="uppercase mb-1">Creator</p>
              {/* img */}
              <div className="flex gap-x-2">
                <img src="/trending/img.png" alt="img" />
                <div className="text-justify text-base">
                  <p className="font-medium">Kiiara Castillo</p>
                  <p>@eatsleepdesignrepeat</p>
                </div>
              </div>
            </div>
            {/* Bid */}
            <div className="font-jost">
              <p className="font-extralight">Current Bid</p>
              <p className="font-light">3.69 ETH</p>
            </div>
            {/* Ends */}
            <div className="font-jost">
              <p className="font-extralight">Ends in</p>
              <p className="font-light">04h 12m</p>
            </div>
          </div>
          <div className="w-1/2 ml-11 flex flex-col gap-y-2 justify-end uppercase font-azonix">
            <button className="w-full h-auto p-3 border rounded-md border-[#B2D135] text-[#B2D135]">
              view artwork
            </button>
            <button className="w-full h-auto p-3 bg-[#B2D135] border rounded-md border-[#B2D135] text-black">
              place bid
            </button>
          </div>
        </div>
        {/* Recent Activity */}
        <div className="w-1/3 h-80 flex flex-col justify-between ml-7 font-jost text-lg">
            <div className="flex gap-x-2 border border-yellow-300 rounded-md p-4">
                <img className="object-contain" src="/trending/p1.png" alt="img" />
                <div>
                    <div className="flex  gap-x-2">
                        <p className="font-medium">Asher Millstone</p>
                        <p className="font-extralight text-center">(@therealmillstone)</p>
                    </div>
                    <p>sent you 4.20 ETH</p>
                </div>
            </div>
            <div className="flex gap-x-2 border border-yellow-300 rounded-md p-4">
                <img className="object-contain" src="/trending/p2.png" alt="img" />
                <div>
                    <div className="flex  gap-x-2">
                        <p className="font-medium">text-sm</p>
                        <p className="font-extralight text-center">(@officialannalise)</p>
                    </div>
                    <p>followed you</p>
                </div>
            </div>
            <div className="flex gap-x-2 border border-yellow-300 rounded-md p-4">
                <img className="object-contain" src="/trending/p3.png" alt="img" />
                <div>
                    <div className="flex  gap-x-2">
                        <p className="font-medium">The Weeknd</p>
                        <p className="font-extralight text-center">(#67GH5)</p>
                    </div>
                    <p>purchased by you for 0.05 ETH</p>
                </div>
            </div>
            
        </div>
      </div>

      {/* Recent Activity */}
    </div>
  );
};

export default trending;
