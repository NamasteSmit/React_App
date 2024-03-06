import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';
 import Error from "./components/Error";
import LoginPage from './components/LoginPage';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/Store';
import Cart from './components/Cart';
//lazy loading
const InstaMart = lazy(()=> import("./components/InstaMart"))
const About = lazy(()=> import("./components/About"));

const AppLayout = () =>{

   const [user , setUser] = useState({
    name : "",
    email:"",
   })

   const[isLoggedIn,setisLoggedIn] = useState(false);
    
    console.log(isLoggedIn)
    return !isLoggedIn ? <UserContext.Provider value={{
      isLoggedIn: isLoggedIn,
      setisLoggedIn: setisLoggedIn
    }}><LoginPage/></UserContext.Provider>  : (
       <Provider store={store}>
        <UserContext.Provider value={{
          user:user,
          setUser:setUser,
          isLoggedIn:isLoggedIn,
          setisLoggedIn:setisLoggedIn,
          }}>
          <Header/>
          {/* 
          <Body/> 
          Here instead of body component we need to render differebt pages according to the router config. between header and Footer {so we use Outlet component}
          So as I want my middle section to keep changong based on the router config we use Outlet component
          so header and Footer will be always there but middle section will be rendered according to the router config

          {so all the children will go into the Outlet component}
          */}
          <Outlet/>
          <Footer/>
        </UserContext.Provider>
        </Provider>
    )
}


 
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement :<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<Shimmer/>}><About/></Suspense>,
        children:[
          {
              path:"profile", //dont use /profile here else it will consider localhost:1234/profile instead we use profile so it will be /about/profile
              element:<Profile/>
          }
        ]
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/instamart",
        element: <Suspense fallback={<Shimmer/>}><InstaMart/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
