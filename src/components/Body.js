import RestaurentComponent, { withPromotedLabel } from "./RestaurentComponent";
import { useEffect, useState , useContext} from "react";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router-dom";
import { ALL_RESTAURENT } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [listOfData, setListOfData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSeacrhText] = useState("");

  // Passing the HOC 
  const RestaurentCardPromoted = withPromotedLabel(RestaurentComponent);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(ALL_RESTAURENT);
    const json = await data.json();

    // Optional Chaining
    const filteredData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfData(filteredData);
    setFilterData(filteredData);
    console.log(filteredData)
    
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Offline !!, Pls check your internet connection</h1>

  // Conditional Rendering
  if (listOfData.length === 0) {
    return <Shimmer />;
  }

  const {loggedUser, setUserName} = useContext(UserContext);

  return (
    <div className="m-4 p-4">
      <div className="btn-container flex justify-around">
        <button
          className="border border-inherite rounded-sm bg-green-200"
          onClick={() => {
            const filterdList = listOfData.filter(
              (res) => res.info.avgRatingString > 4.2
            );
            setFilterData(filterdList);
          }}
        >
          Top Restaurents
        </button>
        <input
          className="border border-black rounded-sm px-2"
          value={searchText}
          onChange={(e) => {
            setSeacrhText(e.target.value);
          }}
          />
         
        <button className=" border border-inherite rounded-sm bg-green-200"
          onClick={() => {
            const filterSearch = listOfData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterData(filterSearch);
          }}
        >
          Search
        </button>
        <label>User:</label>
          <input
          className="border border-black rounded-sm px-2"
          value={loggedUser}
          onChange={(e) => setUserName(e.target.value)}
          />
        <button className="border border-inherite rounded-sm bg-green-200"
          onClick={() => {
            fetchData();
          }}
        >
          Show All Restaurents
        </button>
      </div>
      <div className="mt-4 flex flex-wrap">
        {filterData.map((restaurent) => {
          return (
            <NavLink key={restaurent.info.id} to = {"/restaurents/"+ restaurent.info.id}>
              {
                restaurent.info.isOpen ? <RestaurentCardPromoted resData={restaurent} /> :
                <RestaurentComponent resData={restaurent} />
              }
            
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
