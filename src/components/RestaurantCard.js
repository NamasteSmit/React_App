import { IMG_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({item})=>{
    const {name,cloudinaryImageId,cuisines,avgRatingString} = item; 
    
     const {user} = useContext(UserContext);

    return(
        <div className='card'>
          <div className='food-img'>
             <img src={IMG_URL+cloudinaryImageId} alt="" />
          </div> 
              <h2>{name}</h2>
              <h3>{cuisines.join(",")}</h3>
              <h4>{avgRatingString} stars</h4> 
              <h5>{user.name+ " " + user.email}</h5>
              
        </div>
    )
}

export default RestaurantCard;