function List() {
  return (
    <div className="mt-3 border-t border-gray-300 ">
      <ul className="hidden sm:flex text-[#5c5c5c]  items-center justify-between py-2 max-w-7xl mx-auto text-[13px] px-2">
        <li>Home</li>
        <li>Saved</li>
        <li>Home & Garden</li>
        <li>Electronics</li>
        <li>Fashion</li>
        <li className="hidden lg:inline-flex">Sports&Leisure</li>
        <li className="hidden lg:inline-flex">Health&Beauty</li>
        <li>Toys</li>
        <li>Motors</li>
        <li>Entertainment</li>
        <li>Collectables</li>
        <li>Deals</li>
        <li className="hidden lg:inline-flex">Local</li>
      </ul>
      <ul className="sm:hidden">
        <ul className=" sm:hidden text-[#5c5c5c] flex items-center justify-between py-2 max-w-7xl mx-auto text-[12px] px-2">
          <li>Home</li>
          <li>Saved</li>
          <li>Home & Garden</li>
          <li>Electronics</li>
          <li>Fashion</li>
        </ul>
        <ul className=" sm:hidden text-[#5c5c5c] flex items-center justify-between py-2 max-w-7xl mx-auto text-[12px] px-2">
          <li>Toys</li>
          <li>Motors</li>
          <li>Entertainment</li>
          <li>Collectables</li>
          <li>Deals</li>
        </ul>
      </ul>
    </div>
  );
}

export default List;
