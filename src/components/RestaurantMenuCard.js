import Shimmer1 from "./Shimmer1";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenuCard = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  // Loading
  if (resInfo === null) return <Shimmer1 />;

  // Extra safety
  if (!resInfo?.cards) return <Shimmer1 />;

  // Safe restaurant info
  const restaurantInfo =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    avgRatingString,
    areaName,
    sla,
    feeDetails,
  } = restaurantInfo;

  // Safe categories
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log(categories);

  return (
    <div className="menu">
      <div className="title1">
        Home / India /{" "}
        {resInfo?.cards?.[0]?.card?.card?.text || "Restaurant"}
      </div>

      <h1 className="heading11">
        {name || "Restaurant"}
      </h1>

      <hr />

      <div className="menucard">
        <div>
          <div className="rating">
            <span className="span">★</span> &nbsp;

            {avgRatingString || "4.0"}
            ({totalRatingsString || "0 ratings"})
            &nbsp; • &nbsp;

            {costForTwoMessage || "₹300 FOR TWO"}
          </div>
        </div>

        <div className="cuisines">
          {cuisines?.join(", ") || "Indian Food"}
        </div>

        <div className="outlet">
          <div className="sc-lizKOf bBYPYZ">
            <div className="sc-fsvrbR jnMRZP"></div>
            <div className="sc-jOnpCo kEBcrx"></div>
            <div className="sc-fsvrbR jnMRZP"></div>
          </div>

          <div className="wewqdiok">
            Outlet

            <span className="card1">
              &nbsp;&nbsp;
              {areaName || "Unknown Area"}
            </span>

            ▾

            <div>{sla?.slaString || "30 mins"}</div>
          </div>
        </div>

        <hr />

        <div className="msg">
          <img
            width="20px"
            height="20px"
            alt="delivery"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
          />

          &nbsp;

          {feeDetails?.message?.replace(
            "<b>2.3 kms</b>",
            "2.3 km "
          ) || "Free Delivery"}
        </div>
      </div>

      <div className="boxgray"></div>

      {/* Categories Accordion */}
      <div>
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <ResCategory
              key={category?.card?.card?.title || index}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center" }}>
            No Menu Available
          </h2>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;