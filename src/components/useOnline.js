import { useState , useEffect } from "react";
const useOnline = () =>{

    const [status, setStatus] = useState(true);
    
     useEffect(()=>{
 
        const handleOnlione = ()=>{
            setStatus(true);
          }
        const handleOffline = ()=>{ 
            setStatus(false);
        }

        window.addEventListener("online",handleOnlione);

        window.addEventListener("offline",handleOffline);

        return()=>{
            window.removeEventListener("online",handleOnlione);
            window.removeEventListener("offline",handleOffline);
        }

     },[]);
     

     return status; //returns true or false
}

export default useOnline;