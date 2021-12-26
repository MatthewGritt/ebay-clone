import { XIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { basketState } from "../basketState";

function BasketItem({ image, title, price, id }) {
  const [basketData, setBasketData] = useRecoilState(basketState);

  const removeFromBasket = () => {
    const index = basketData.findIndex((listItem) => listItem.id === id);
    const newArray = [...basketData];
    const newList = newArray.filter((list) => list.id !== id);
    setBasketData(newList);
  };

  return (
    <div className="bg-white text-center h-[350px] sm:h-auto flex flex-col sm:flex-row items-center mt-3 py-5 sm:py-10 px-3 lg:px-10 border border-[#d3d3d3] ">
      <img className="h-[150px] max-w-[150px]" src={image} alt="" />
      <div className="flex  flex-col sm:flex-row justify-between flex-1 pl-5  lg:pl-10 items-center relative">
        <h2 className="underline font-bold  text-[15px] xl:text-lg w-[240px] sm:w-[160px]  lg:w-[230px] xl:w-[340px]">
          {title}
        </h2>
        <p className="sm:absolute right-10 text-xl sm:text-[17px] lg:text-xl">
          £{price}
        </p>
        <XIcon
          onClick={removeFromBasket}
          className="h-8 text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default BasketItem;
