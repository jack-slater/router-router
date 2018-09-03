import React from "react";
import {Link} from "react-router-dom";

export const Home = ({}) => {
    return (
        <div>
            <h1>Welcome to this test app</h1>
            <ul>
                <li><Link to={`/training`}>Training</Link></li>
                <li><Link to={`/profile`}>Profile</Link></li>
            </ul>
        </div>
    )
};