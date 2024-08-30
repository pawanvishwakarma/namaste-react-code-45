import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constant";




const RestaurentComponent = (props) => {

   const data = useContext(UserContext) 
    const { resData} = props
    return (
    
                <div className='m-6 p-4 w-52 bg-slate-300 rounded-lg hover:bg-slate-400'>
                <img className='rounded-lg' alt='img' src={CDN_URL+ resData.info.cloudinaryImageId} />
                <h4 className="mx-4 font-bold text-lg font-serif">{resData.info.name}</h4>
                <h5 className="mx-4 font-serif text text-red-500">{resData.info.cuisines.join("\n")}</h5>
                <h5 className="mx-4 font-serif text-green-950">{resData.info.avgRating} Star</h5>
                <h5 className="mx-4 font-serif font-semibold">{resData.info.costForTwo}</h5>
                <h5 className="mx-4 font-serif text-pink-600">{resData.info.sla.slaString}</h5>
                <h5 className="mx-4 font-serif text-pink-600">{data.loggedUser}</h5>   
        
            </div>
       
    
    )
}


// Created HOC that takes Component as input and return return a inhance/modified component
export const withPromotedLabel = (RestaurentComponent) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-neutral-800 m-1 ml-3 p-1 text-white rounded-sm">One Free Delivery</label>
                <RestaurentComponent {...props}/>
            </div>
        )
    }
}

export default RestaurentComponent;