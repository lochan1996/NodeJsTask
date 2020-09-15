import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Base from './Base';
import { isAuthenticate } from './menu';

const API = 'http://138.197.0.245:8000/api' 


export default class TodoLists extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        
        
        return (
            
            <div>
                <Base title="Task" />
                
                 <div className="container-fluid">
                        <h1 className="text-center">Welcome</h1>
                 </div>
                    
                
            </div>
        );
    }
}

