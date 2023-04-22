/* eslint-disable @next/next/no-img-element */
const collection = () => {
  return (
    <div className="w-full   px-5 text-white">
      <p className="font-azonix mt-3 text-lg">top collections</p>
      <div className="grid grid-cols-5">
        {/* Travis */}
        <div className="  h-60">
          <img
            className="object-contain w-full h-full "
            src="/collections/v1.png"
            alt="img"
          />
        </div>
        {/* Drake */}
        <div className=" h-60">
          <img
            className="object-contain w-full   h-full "
            src="/collections/v2.png"
            alt="img"
          />
        </div>
        {/* LIL */}
        <div className="   h-60">
          <img
            className="object-contain w-full h-full "
            src="/collections/v4.png"
            alt="img"
          />
        </div>
        {/* The Weekend */}
        <div className="   h-60">
          <img
            className="object-contain w-full h-full "
            src="/collections/v1.png"
            alt="img"
          />
        </div>
        <div className="   h-60">
          <img
            className="object-contain w-full h-full "
            src="/collections/v2.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default collection;
