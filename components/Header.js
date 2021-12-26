import {
  ChevronDownIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { basketState } from "../basketState";

function Header() {
  const router = useRouter();

  function basketPage() {
    router.push("/basket");
  }

  const basket = useRecoilValue(basketState);

  return (
    <div className="bg-[#222]">
      <div className="flex items-center  h-[70px] px-[30px]">
        {/* left */}
        <div className="flex items-center text-white">
          <img
            onClick={() => router.push("/")}
            className=" h-11 pr-[22px] cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/640px-EBay_logo.svg.png"
            alt=""
          />
          <div className="hidden lg:inline-flex  items-center">
            <span className="w-16 leading-4 text-[15px]">Shop by category</span>
            <ChevronDownIcon className="h-4 -ml-1" />
          </div>
        </div>
        {/* center */}
        <div className=" hidden sm:inline-flex items-center bg-white flex-1 h-[40px] rounded-[5px] ml-5 mr-2 ">
          <SearchIcon className="h-5 pl-3 pr-2 text-gray-500" />
          <input
            placeholder="Search for anything"
            className="flex-1 px-2 text-[17px] outline-none "
            type="text"
          />
          <div className="flex"></div>
          <div className="hidden md:inline-flex items-center justify-between bg-gray-100 h-full w-[130px] lg:w-[180px] px-3 text-sm rounded-r-[5px]">
            <p>All Categories</p>
            <ChevronDownIcon className="h-4" />
          </div>
        </div>
        {/* right */}
        <button className=" hidden sm:block px-3 py-[9px] cursor-auto bg-[#3665f3] w-[100px] lg:w-[170px] rounded-lg text-[15px] font-bold text-white mr-[60px]">
          Search
        </button>
        <div className="flex items-center absolute right-[30px]">
          <ShoppingCartIcon
            onClick={basketPage}
            className="h-7 ml-5 text-white cursor-pointer"
          />{" "}
          <span
            onClick={basketPage}
            className="pl-[2px] text-white cursor-pointer"
          >
            {basket.length}
          </span>
        </div>
      </div>

      {/* bottom part */}

      <div className="sm:hidden flex items-center px-2 pb-2">
        <div className="flex items-center bg-white flex-1 h-[40px] rounded-[5px]  mr-2 ">
          <SearchIcon className="h-5 pl-3 pr-2 text-gray-500" />
          <input
            placeholder="Search for anything"
            className="flex-1 px-1 text-[17px] outline-none"
            type="text"
          />
          <div className="flex"></div>
          <div className="hidden md:inline-flex items-center justify-between bg-gray-100 h-full w-[180px] px-3 text-sm rounded-r-[5px]">
            <p>All Categories</p>
            <ChevronDownIcon className="h-4" />
          </div>
        </div>
        {/* right */}
        <button className="  py-[12px] bg-[#3665f3] w-[35px] rounded-lg text-[15px] cursor-auto text-white">
          <SearchIcon className="h-4 w-full" />
        </button>
      </div>
    </div>
  );
}

export default Header;
