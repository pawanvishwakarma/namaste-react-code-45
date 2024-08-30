import { useEffect, useState } from "react";
import { RESTAURENT_MENU } from "./constant";


const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURENT_MENU + resId)
        const json = await data.json()
        setResInfo(json.data)

    }

    return resInfo;
}

export default useRestaurentMenu;