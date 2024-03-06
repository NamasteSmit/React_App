export const filterData = (searchText , restaurant)=>{
    return restaurant.filter((element)=>{
       return element.info.name.toLowerCase().includes(searchText.toLowerCase());
     })
  }
  