import { useContext, useEffect } from "react";
import UserDetailContext from "../context/UserDetailContext";
import { getAllFav } from "../utils/api.js";

const useFavorites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userDetails.email) {
          const favorites = await getAllFav(userDetails.email);
setUserDetails((prev) => ({ ...prev, favourites: favorites }));

          // Store favorites data in local storage
          localStorage.setItem("userFavorites", JSON.stringify(favorites));
          
          // Update state with favorites
          setUserDetails((prev) => ({ ...prev, favourites: favorites }));
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchData();
  }, [userDetails.email, setUserDetails]);
};

export default useFavorites;
