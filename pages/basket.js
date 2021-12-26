import { useRecoilValue } from "recoil";
import { basketState } from "../basketState";
import BasketItem from "../components/BasketItem";
import Header from "../components/Header";
import Total from "../components/Total";

function basket() {
  const basketData = useRecoilValue(basketState);
  return (
    <div className="bg-[#ebebeb] h-full min-h-screen pb-20">
      <Header />
      {basketData.length === 0 ? (
        <h1 className="text-center text-xl mt-20 font-semibold">
          You don't have any items in your basket
        </h1>
      ) : (
        <div className="px-1 sm:px-5">
          <h2 className="text-center sm:text-left font-bold text-lg sm:text-2xl mt-3">
            Shopping basket ({basketData.length} items)
          </h2>
          <div className="  grid  md:grid-cols-3 ">
            <div className=" md:col-span-2">
              {basketData.map((basket) => (
                <BasketItem
                  key={basket.id}
                  id={basket.id}
                  image={basket.image}
                  title={basket.title}
                  price={basket.price}
                />
              ))}
            </div>
            <div className=" md:col-span-1">
              <Total />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default basket;
