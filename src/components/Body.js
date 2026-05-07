import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import RestaurantCard, {
  withPromotedLabel,
} from "./RestaurantCard";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utilis/useOnlineStatus";

import userContext from "../utilis/UserContext";

import mockRestaurantData from "../utilis/mockRestaurantData";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] =
    useState([]);

  const [filteredRestaurant, setFilteredRestaurant] =
    useState([]);

  const [searchText, setSearchText] =
    useState("");

  const RestaurantCardPromoted =
    withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setlistOfRestaurant(mockRestaurantData);
    setFilteredRestaurant(mockRestaurantData);
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline !!
      </h1>
    );
  }

  const {
    isLoggedUser,
    setLoggedinInfo,
  } = useContext(userContext);

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="cont-bn">

        {/* Search */}
        <div className="Search">
          <input
            className="search-box"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
          />

          <button
            className="btn"
            onClick={() => {
              const filteredData =
                listOfRestaurant.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(
                      searchText.toLowerCase()
                    )
                );

              setFilteredRestaurant(
                filteredData
              );
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated */}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData =
              listOfRestaurant.filter(
                (res) =>
                  Number(
                    res.info.avgRating
                  ) > 4
              );

            setFilteredRestaurant(
              filteredData
            );
          }}
        >
          Top Rated Restaurants
        </button>

        {/* Username */}
        <div>
          <label>Username :</label>

          <input
            className="search-box"
            type="text"
            value={isLoggedUser}
            onChange={(e) =>
              setLoggedinInfo(
                e.target.value
              )
            }
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurant.map(
          (restaurant) => (
            <Link
              key={restaurant.info.id}
              to={
                "/restaurant/" +
                restaurant.info.id
              }
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted
                  resData={restaurant}
                />
              ) : (
                <RestaurantCard
                  resData={restaurant}
                />
              )}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
