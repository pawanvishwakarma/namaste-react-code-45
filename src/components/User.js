import { useState } from "react";
import About from "./About";

const User = (props) => {
    const [Count] = useState(0);
    const [Count2] = useState(1);

    const { name, location, contact } = props
    return (
        <>
        <div>
            <h2>Count: {Count} </h2>
            <h2>Count: {Count2} </h2>
        </div>
        <div className="user-card">
            <h2>Name: {name} </h2>
            <h3>Location: {location} </h3>
            <h4>Contact: {contact} </h4>
        </div>
        </>
    )
}

export default User;