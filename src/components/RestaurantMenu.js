import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu  = () =>{

    const params = useParams();
    const {id} = params;

    // const [restaurant , setRestaurant] = useState({});     
    // const[menu,setMenu] = useState([]);

     const {restaurant,menu} = useRestaurant(id);

  
     const dispatch = useDispatch();
      
     const addFoodItem = (item) =>{
          dispatch(addItem(item));
     }
      

      if(!restaurant) return null;

    return (restaurant.length==0)?<Shimmer/> : (
        <>
          <div className="menu-card">
        <div className="menu-details">
          <h1>Restaurant id : {restaurant.id}</h1>
          <img src={IMG_URL + restaurant.cloudinaryImageId} alt="" />
          <h3>{restaurant.name}</h3>
        </div>
        <div className="menu-name-card">
        
           { !menu ? <h3>Currently We are Out of Service🌑</h3> :  menu.map((element, index) => {
            return (
              <div className="menu-name">
                <h3 key={index}>{element.card.info.name}</h3>
                <button onClick={()=>addFoodItem(element)}>add</button>
              </div>
            );
          })}
        </div>
      </div>
        </>
    )
}

export default RestaurantMenu;