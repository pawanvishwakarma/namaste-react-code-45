import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCotegory from "./RestaurentCotegory"
import { useState } from "react";


const RestaurentMenu = () => {

const {resId} = useParams();
const resinfo = useRestaurentMenu(resId);

const [showIndex, setShowIndex] = useState(null);
   

   
    if(resinfo === null) { return <Shimmer />}

    const { name, avgRating, costForTwoMessage, cuisines,totalRatingsString} = resinfo?.cards[2]?.card?.card?.info

    const { slaString } = resinfo?.cards[2]?.card?.card?.info.sla
    // const {itemCards} = resinfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    

    // console.log("consol",resinfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards)

    const Cotegories = resinfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        
    )
    


    return (
        <>
        <div className="m-4 p-4 ">
           <h1 className="text-center font-serif font-bold">{name}</h1>
           
           <div className="w-4/12 h-[200px] m-auto bg-gray-200 rounded-lg">
              <h3 className="m-2 p-2 font-sans">{avgRating+"("+totalRatingsString+")"}  -  {costForTwoMessage}</h3>
              {cuisines.map(cuisine => <h5 key={cuisine} className="inline-flex mx-2 px-2">{cuisine}</h5>)}
              <div className="m-2 p-2">
              <h4>Outlet</h4>
             </div>
             <div>
              <h4 className="mx-2 px-2 font-serif " >{slaString}</h4>
             </div>
           </div>
          {Cotegories.map((items, index)=> 
            <RestaurentCotegory key={items?.card?.card?.title} 
            data = {items}
            // get the state variable and compare it and pass to the child component
            showItem = {index === showIndex ? true : false} 
            //set the state variable
            setShowIndex = {() => setShowIndex(index)}
            />
            )}
        </div>
        </>
    )
}

export default RestaurentMenu;