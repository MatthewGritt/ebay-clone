import { useRecoilState } from "recoil";
import { basketState } from "../basketState";

function Item({ image, title, price }) {
  const [basketData, setBasketData] = useRecoilState(basketState);

  const addToBasket = () => {
    const id = randomNumber();
    setBasketData((basket) => [
      ...basket,
      {
        image,
        title,
        price,
        id,
      },
    ]);
  };

  const randomNumber = () => {
    return Math.ceil(Math.random() * 5000);
  };

  return (
    <div className="border border-[#d3d3d3] h-[420px] w-[300px] flex flex-col items-center justify-between mt-5">
      <img className="pt-2" src={image} alt="" />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-lg text-center">{title}</h3>
        <p className="text-xl py-3 font-semibold">£{price}</p>
        <button onClick={(e) => addToBasket()} className="basket">
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default Item;
