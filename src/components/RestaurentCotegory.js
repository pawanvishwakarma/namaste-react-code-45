import { useState } from "react"
import { ITEM_IMG } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";

const RestaurentCotegory = ({data, setShowIndex, showItem}) => {
 
    const dispatch = useDispatch();

 // call handlClick thru the onClicke event
    const handleClick = () => {
     //call the function and pass it thru props to the Parent Component
        setShowIndex();   
    }

    const handlCart = (items) => {
           alert("You are adding =>" +"    "+ items?.card?.info?.name)
        //    console.log("You are adding..",items?.card?.info?.name)
           dispatch(addItem(items))
    }


    const {itemCards} = data.card?.card
    // console.log(data.card?.card)
    return (
        <div className="w-8/12 bg-slate-50 m-auto my-4 rounded-sm shadow-lg p-4">
        <div className="">
         <div className="flex justify-between text-lg cursor-pointer" onClick={handleClick} >
            <span className="mx-4 font-bold"> {data?.card?.card?.title } ( {data?.card?.card?.itemCards.length} )   </span>
            <span className="mx-4 font-bold"> 🔽 </span>
         </div>   
      </div>
      <div className="w-full p-3 m-auto">
      {/* get the index from parent cla */}
       {showItem && itemCards.map(  (items) =>  
            <div key={items?.card?.info?.id} className=" flex justify-between border-y-4">
                <div className="w-10/12 ">
                   <h2 className="font-sans font-semibold text-md">{items?.card?.info?.name}</h2>
                   <h3 className="font-semibold"> ₹ {items?.card?.info?.price/100 || items?.card?.info?.defaultPrice/100 }</h3>
                   <h4 className="font-mono">⭐{items?.card?.info?.ratings?.aggregatedRating?.rating} </h4>
                   <h4 className="font-sans text-lg font-semibold">Stocks: {items?.card?.info?.inStock} </h4>
                   <p className="text-xs py-4">{items?.card?.info?.description}</p>
                </div>
                <div className="w-2/12 p-4  ">
                   <div className="absolute mx-5 ">
                      <button className="p-2 shadow-lg bg-slate-200 rounded-md text-md text-green-400 text-md "
                      onClick={()=> handlCart(items)}
                      > Add + </button>
                    </div>
                    <img className="w-40 rounded-lg" src={ITEM_IMG + items?.card?.info?.imageId} />
                   
                </div>
             </div>
        )}
      </div>
    </div>    
    )
}

export default RestaurentCotegory;