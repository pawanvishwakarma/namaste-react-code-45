import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const {loggedUser} = useContext(UserContext);
    // console.log(loggedUser)
    const cart = useSelector((store)=> store.cart.items)
    console.log("cart",cart)

    const onlineStatus = useOnlineStatus();

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="flex justify-between bg-slate-300 shadow-sm">
           <div className='logo-container'>
               <img className='w-24' alt='logo-item' src={LOGO_URL} />
           </div>
           <div className="flex">
               <ul className="flex mt-10">
                <li className="px-4 ">Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
                <NavLink to="/"><li className="px-4" >Home</li></NavLink>
               <NavLink to="/contact"><li className="px-4">Contact Us</li></NavLink>
               <NavLink to="/about"><li className="px-4">About Us</li></NavLink>
               <NavLink to="/grocery"><li className="px-4">Grocery</li></NavLink>
               <NavLink to="/cart"><li className="px-4">Cart - ({cart.length}) Items</li></NavLink>
                <NavLink to="/cart"><li className="px-4">{loggedUser}</li></NavLink>
                <li className="px-4"><button className="login-btn"
                onClick={()=>{
                   btnName === "Login"? setBtnName("Logout") : setBtnName("Login")
                }}
                >{btnName}</button></li>
               </ul>
           </div>
        </div>
    )
}

export default Header;