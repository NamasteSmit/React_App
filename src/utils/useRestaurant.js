import { useState , useEffect} from "react";

const useRestaurant = (id) =>{
    
 
    const [restaurant , setRestaurant] = useState(null);
    const [menu , setMenu] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
     },[])
 
     async function getRestaurantInfo(){
  
         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.30080&lng=73.20430&restaurantId=${id}`);
 
         const json = await data.json();
         setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
         setRestaurant(json?.data?.cards[0]?.card?.card?.info);
 
     }
    
     return {restaurant,menu};
};

export default useRestaurant;