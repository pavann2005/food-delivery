import RestaurantCard, {
  withPromotedLabel,
} from "./RestaurantCard";

import {
  useEffect,
  useState,
  useContext,
} from "react";

import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "../utilis/useOnlineStatus";

import userContext from "../utilis/UserContext";

import mockRestaurantData from "../utilis/mockRestaurantData";

// Body Component
const Body = () => {
  // State Variables
  const [listOfRestaurant, setlistOfRestaurant] =
    useState([]);

  const [filteredRestaurant, setFilteredRestaurant] =
    useState([]);

  const [searchText, setSearchText] =
    useState("");

  // HOC
  const RestaurantCardPromoted =
    withPromotedLabel(RestaurantCard);

  // Load Mock Data
  useEffect(() => {
    setlistOfRestaurant(mockRestaurantData);
    setFilteredRestaurant(mockRestaurantData);
  }, []);

  // Online Status
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !!
        Check your Internet Connection
      </h1>
    );
  }

  // Context API
  const {
    isLoggedUser,
    setLoggedinInfo,
  } = useContext(userContext);

  // Shimmer UI
  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* Search + Filter Section */}
      <div className="cont-bn">
        
        {/* Search */}
        <div className="Search">
          <input
            className="search-box"
            data-testid="search-input"
            placeholder="Search your Restaurant..."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="btn"
            onClick={() => {
              const filteredRestaurant =
                listOfRestaurant.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(
                      searchText.toLowerCase()
                    )
                );

              setFilteredRestaurant(
                filteredRestaurant
              );
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData =
              listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
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
          <label htmlFor="username">
            Username :
          </label>

          <input
            id="username"
            className="search-box"
            type="text"
            value={isLoggedUser}
            onChange={(e) => {
              setLoggedinInfo(
                e.target.value
              );
            }}
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
