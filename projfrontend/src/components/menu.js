import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Axios from 'axios';

const API = 'http://localhost:8000/api'



export const getAllUsers = () => {
    
    return fetch(`${API}/getAllUsers`, {
        method: "GET"

    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}   


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#2ecc72" }
    }
    else {
        return { color: "#FFFFFF" }
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-dark">



            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/create")} className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/allOrders")} className="nav-link" to="/allOrders">Products</Link>
            </li>
            
        </ul>
    </div>
)


export default withRouter(Menu)


