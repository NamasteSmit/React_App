import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Profile = ()=>{
 
    const{user} = useContext(UserContext);

    return(
        <>
        <h1>{user.name}😎</h1>
        <h3>Contact me @ : {user.email}</h3>
        </>

    )
}

export default Profile;