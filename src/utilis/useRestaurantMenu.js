import { useEffect, useState } from "react";
import mockMenu from "./mockMenu";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setResInfo(mockMenu);
    }, 1000);
  }, []);

  return resInfo;
};

export default useRestaurantMenu;