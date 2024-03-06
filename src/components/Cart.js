import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{

    const cartItems = useSelector(store=>store.cart.items)
      
    const dispatch = useDispatch();
     
    const handleClearCart = (cartItems)=>{
        dispatch(clearCart(cartItems));
    }
      
    return (
        <>
         <h1>Cart Items</h1>
         <button onClick={()=>handleClearCart(cartItems)}>Clear Cart</button>
         <div className="cards">
         {
            cartItems.map((item,index)=>{
                   return <FoodItems item={item} key={index}/>
            })
         }
         </div>
        
        </>
    )
}

export default Cart;