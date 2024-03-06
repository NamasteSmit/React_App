import { useRouteError } from "react-router-dom";

const Error = () =>{
 
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h2>Opps!! something went wrong😥</h2>
            <h3>{error.data}</h3>
            <h5>{error.statusText}</h5>
        </div>
    )

}

export default Error;