import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () =>{

    const {user} = useContext(UserContext);
    return (
        <>
         <div className='footer'>
           <span>copyright@strike123.com</span>
           <span>contact us @ : {user.email}</span>
         </div>
        </>
    )
}

export default Footer;