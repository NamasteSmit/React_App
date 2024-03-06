import { useContext } from "react";
import UserContext from "../utils/UserContext";

const LoginPage = ()=>{
   
    const {isLoggedIn,setisLoggedIn} = useContext(UserContext);
    console.log("Inside Login",isLoggedIn)

    return (
        <div className="login-box">
            <input type="text" placeholder="Name.."/>
            <input type="password" placeholder="Password..." />
            <input type="email" placeholder="email..." />
            {
                isLoggedIn ?  <button onClick={()=>{
                    setisLoggedIn(!isLoggedIn);
                }}>SignUp</button> :  <button onClick={()=>{
                    setisLoggedIn(!isLoggedIn);
                }}>Login</button>
            }
           
        </div>
    )
}
export default LoginPage;