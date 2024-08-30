import React, { Component } from 'react'
import UserClass from './UserClass'


class About extends Component{
  constructor(props) {
    super(props);
    
    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount is Called")
  }
  render(){
    console.log("Parent Render")
    return (
      <div>
       <UserClass name = {"Pawan Using Class"} location = {"Mumbai (MH)"} contact = {"@pawanaugust10"} />
      </div>
      
    )
    
  }
  
}

// const About = () => {
//   return (
//     <div>
     

//      <UserClass name = {"Pawan Using Class"} location = {"Mumbai (MH)"} contact = {"@pawanaugust10"} />
//     </div>
//   )
// }

export default About
