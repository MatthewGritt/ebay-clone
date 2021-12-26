import Item from "./Item";

function Items() {
  return (
    <div>
      {/* FIRST ROW */}
      <div className="flex justify-between flex-wrap">
        {/*left */}
        <div className="flex justify-around flex-1 flex-wrap">
          <Item
            image="/images/img1.webp"
            title="Dewalt DCG405N 18v XR Brushless 125mm Angle Grinder Bare Unit Cordless Brushless"
            price={138}
          />

          <Item
            image="/images/img2.webp"
            title="BREVILLE Mostra VTT937 4-Slice Toaster - White"
            price={39.99}
          />
        </div>
        {/*right */}
        <div className="flex justify-around flex-1 flex-wrap">
          {/* div 3 */}
          <Item
            image="/images/img3.webp"
            title="Shark DuoClean Cordless Vacuum with TruePet and Flexology
          IF250UKT"
            price={185}
          />

          {/* div 4 */}
          <Item
            image="/images/img4.webp"
            title="GRUNDIG Touch Control HD7880 Hair Dryer - White"
            price={34.99}
          />
        </div>
      </div>

      {/* SECOND ROW*/}
      <div className="flex justify-between flex-wrap pb-20">
        {/*left */}
        <div className="flex justify-around flex-1 flex-wrap">
          <Item
            image="/images/img5.webp"
            title="Hisense H50U7QFTUK 50 4K Ultra HD HDR Freeview Play Smart ULED
          TV"
            price={449}
          />
          <Item
            image="/images/img6.webp"
            title="DJI MAVIC AIR - Onyx Black - 4K 1080p Camera Drone"
            price={399.99}
          />
        </div>
        {/*right */}
        <div className="flex justify-around flex-1 flex-wrap">
          <Item
            image="/images/img7.webp"
            title="Nintendo Switch Lite Turquoise & Super Mario All-Stars - Brand
          New & Sealed"
            price={219.99}
          />
          <Item
            image="/images/img8.webp"
            title="New Nokia 5.3 Charcoal 6.55 64GB Dual SIM LTE Android 10 Sim
          Free Unlocked"
            price={159.99}
          />
        </div>
      </div>
    </div>
  );
}

export default Items;
