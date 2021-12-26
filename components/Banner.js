function Banner() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center xl:items-start sm:hidden xl:inline-flex bg-[#feb786] flex-1 py-4 xl:pl-12 text-[#a00739]">
        <h2 className="text-4xl font-bold w-[240px] leading-[45px]">
          Get 20% off selected small businesses
        </h2>
        <p className="py-3 w-[250px] text-[17px] leading-6">
          Shop small and save with over 7000 selected sellers. Ends 4 Dec
        </p>
        <button className="flex justify-center p-[10px] bg-transparent w-[220px]  border border-[#a00739] text-sm font-semibold transition-all duration-200 ease-out hover:bg-[#a00739] hover:text-[#feb786] my-2">
          Use code PICKSMALLBIZ
        </button>
        <p className="text-xs mt-6">
          min spend £10. Max discount £50. T&C apply
        </p>
      </div>
      <img
        className=" hidden sm:block object-contain lg:w-full xl:w-auto "
        src="/images/banner.webp"
        alt=""
      />
    </div>
  );
}

export default Banner;
