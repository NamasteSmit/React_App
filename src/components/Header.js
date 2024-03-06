import { Link } from "react-router-dom";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = ()=>{
    return (
        <>
         <div className='logo'>
            <Link to="/">
            <img src="https://i.pinimg.com/564x/39/13/ae/3913ae3bc296a6a22054a68e8c0ee356.jpg" alt="" />
            </Link>
         </div>
        </>
    )
}



const Header = ()=>{

   const {user,isLoggedIn} = useContext(UserContext);

 
    const cartItems = useSelector(store=>store.cart.items)
    console.log(cartItems);
    
    return (
        <div className='nav-bar'>
            <Title/>
            <div className='nav-components'>
                <input type="search" placeholder="Search.." />
                <button className='srch'>🔍</button>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/instamart" >Insta🛒</Link></li>
                    {isLoggedIn ? <li><Link to="/login">SignUp</Link></li> :<li><Link to="/login">Login</Link></li> }
                    <li><Link to="/about">About Us</Link></li>
                    <li className='cart-items'><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    <li>{user.name}</li>
                </ul>
            </div>
        </div>
    )
}
 
export default Header;