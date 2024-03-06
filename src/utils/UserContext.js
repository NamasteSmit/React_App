import { createContext } from "react";

const UserContext = createContext({
    user:{     //pass some default value of context
    name : "Smit",
    email: "smit@gmail.com",
}});

export default UserContext;