import { useEffect, useState } from "react";
import { ALL_RESTAURENT } from "./constant";


const useAllRestaurent = () => {

    const [listOfData, setListOfData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(()=>{
         fetchRestaurent();
    }, []);

    const fetchRestaurent = async () => {
        const data = await fetch(ALL_RESTAURENT)
        const json = await data.json();
        setListOfData(json.data);
        setFilterData(json.data)
    }
   
  return (listOfData, filterData);
}

export default useAllRestaurent;