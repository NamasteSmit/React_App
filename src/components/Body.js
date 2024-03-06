import { restaurantData } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "./useOnline";
import UserContext from "../utils/UserContext";
const Body = ()=>{
 
    const [filteredrestaurant , setFilteredRestaurant] = useState([]);  
    const [allRestaurants , setAllRestaurants] = useState([]);
    const [searchText , setSearchText] = useState(""); //to create state variable
     
    const {user,setUser} = useContext(UserContext);

     useEffect( ()=>{
      //API Call
       getRestaurant();
     },[])
    
    async function getRestaurant(){

      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const jsonData = await data.json();
    
      setAllRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

      const status = useOnline();
       if(!status){
        return <h1>🔴 Offline,PLease check your internet Connection</h1>
       }

     //early return
    if(!allRestaurants) return null;

    return (allRestaurants.length) == 0 ? <Shimmer/> :  (
        <>
         <div className="hero-search">
            <input type="text" placeholder="Search" value={searchText}
            onChange={(e)=>{
               setSearchText(e.target.value);
            }} />
            <button onClickCapture={()=>{
              const filteredData =  filterData(searchText,allRestaurants);
              setFilteredRestaurant(filteredData);
            }}>Search</button>
            <input type="text" value={user.name} onChange={(e)=>{
                 setUser({ 
                  name : e.target.value,
                  email :e.target.value+"@gmail.com" ,
                });
            }}/>
         </div>
           <div className='hero-section'>
          {
           (filteredrestaurant.length==0) ? <h1>No restsurant Found</h1> : filteredrestaurant.map((item )=>{
                return (
               <Link to={"/restaurant/"+item.info.id} key={item.info.id}>
                <RestaurantCard item={item.info} />
               </Link> 
                )
            })
          }
        </div>
        </>
    )
}

export default Body;