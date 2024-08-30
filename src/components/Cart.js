import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {

    const cart = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();

    const handleRemoveItem = (items)=> {
        dispatch(removeItem(items))
    }

    const handleClearItem = ()=> {
        dispatch(clearItem());
    }

    console.log("CartPage", cart)
    return (

        
        <>
        <div className="m-2 p-2 text-center">
        <h2>This is Cart Page</h2>
        <button className="m-2 p-2  bg-slate-400 rounded-md " onClick={handleClearItem}>Clear Cart</button>
        </div>
        
        
        
        <div className=" flex justify-around flex-wrap ">
           {cart.length === 0 && (
            <h1> Cart is empty</h1>
           )} 
         { cart.map((items)=> (
            <div key={items?.card?.info?.id} className="w-3/12 p-2 m-2 h-auto border border-black">  
               <h2>{items?.card?.info?.name}</h2>
               <button className="m-2 p-2  bg-slate-400 rounded-md " onClick={()=> handleRemoveItem(items)}>Remove Item</button>
               </div>
         ))}
           </div>
        </>
    )
}

export default Cart;