import { IMG_URL } from "../constants"

const FoodItems  = ({item})=>{

    const {name,cloudinaryImageId,cuisines,avgRatingString} = item.card.info
    return(
            <div className='card'>
          <div className='food-img'>
             <img src={IMG_URL+cloudinaryImageId} alt="" />
          </div> 
              <h2>{name}</h2>
              <h3>{cuisines}</h3>
              <h4>{avgRatingString} stars</h4>    
        </div>
        
    )
}

export default FoodItems;