import { useRecoilValue } from "recoil";
import { basketState } from "../basketState";

function Total() {
  const basketData = useRecoilValue(basketState);

  let prices = [];
  basketData.map((item) => {
    prices.push(item.price);
  });

  let amount = prices.reduce((acc, cur) => {
    return (acc += cur);
  });

  let total = amount.toFixed(2);

  return (
    <div className="mt-4  flex justify-center pb-20">
      <div className="flex flex-col bg-white md:mx-2 max-w-sm flex-1 text-sm border border-[#d3d3d3]">
        <button className="flex-1 bg-[#0654ba] mx-6 rounded-[5px] mt-3 text-white py-3 font-semibold">
          Go to checkout
        </button>
        <button className="flex-1 text-black bg-white border-black border mx-6 rounded-[5px] mt-3 py-3 font-semibold">
          Continue shopping
        </button>
        {/* middle */}
        <div className="flex items-center justify-between py-4 mx-4 text-[#484848] border-b border-[#d3d3d3]">
          <div>
            <p>items ({basketData.length})</p>
            <p>Postage</p>
          </div>
          <div className=" text-right">
            <p>£{total}</p>
            <p>Free</p>
          </div>
        </div>
        {/* bottom */}
        <div className="flex items-center justify-between p-4 text-lg">
          <span>Total</span>
          <span>£{total}</span>
        </div>
      </div>
    </div>
  );
}

export default Total;
