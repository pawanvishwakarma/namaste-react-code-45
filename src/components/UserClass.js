import { Component } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends Component{

    constructor(props) {
        super(props);
        this.state = {
            Count: 0
        }

        console.log("Child Constructor")
        
    }
    increaseCount = (val) => {
        
        this.setState({
            Count: val + 1
        });
      };

    decreaseCount = (val) => {
        
        this.setState({
            Count: val - 1
        });
      };
   
      
      componentDidMount(){
        console.log("Child componentDidMount is called")
      }
       

   render() {
    console.log("Child Constructor")
    const { name, location, contact } = this.props
    const { Count} = this.state
  


     return (
        <>
        <div>
            <h2>Count: {Count} </h2>
            <button onClick={()=> this.increaseCount(Count)} >Count Increase</button>
            <button onClick={()=> this.decreaseCount(Count)} >Count Increase</button>
            
        </div>
        {/* <div>
            <UserContext.Consumer>
            { data => console.log("UserClass",data.loggedUser)}
            </UserContext.Consumer>
        </div> */}

        <div className="user-card">
            <h2>Name: {name} </h2>
            <h3>Location: {location}  </h3>
            <h4>Contact: {contact} </h4>
        </div>
        </>
    )
   }
}

export default UserClass;
