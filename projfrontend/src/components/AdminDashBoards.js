import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Base from './Base';

import { deleteThisOrder } from './helper/deleteTodo';



const API = 'http://localhost:8000/api'

const Todo = props => (
    <tr>
        
        <td className={props.todo.Product }>{props.todo.Product}</td>
        
        <td className={props.todo.country}>{props.todo.country}</td>
        <td>
            <Link className="btn btn-secondary" to={"/view/" + props.todo._id}>
                View
                </Link>


        </td>
        <td>
            <Link className="btn btn-primary" to={"/edit/" + props.todo._id}>
                Edit
                </Link>
            

        </td>
        <td>
            <button
                onClick={() => {
                    
                    deleteThisOrder(props.todo._id).then(data => {
                        if (data.error) {
                            console.log(data.error)
                        }
                        else {
                            window.location.reload(false)
                        }
                    })
                }}
                className="btn btn-danger"
            >
                Delete
            </button>

        </td>


    </tr>

)



export default class AdminDashBoard extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            search: '',
            SearchTerm: '',
            setSearchTerm:''
        }
        
    }

    componentDidMount() {
        
        Axios.get(`${API}`).then(response => {
            
            this.setState({
                todos: response.data
            })
        }).catch((err) => {
            console.log(err)
        })
       
    }

    componentDidUpdate() {
        Axios.get('http://localhost:8000/api/').then(response => {
            this.setState({
                todos: response.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    todolist() {
        //console.log('data', this.state.todos)
        return this.state.todos.map((current, index) => {
            return <Todo todo={current} key={index} />
        })
    }
    
    
    
    
    render() {
        
        return (

            <div>
                <Base title="All Orders" />
                
                <div>
                    
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                                    
                                    <th>ProductName</th>
                                    
                                    <th>Country</th>


                        </tr>
                    </thead>
                    <tbody>
                        {this.todolist()}
                    </tbody>

                        </table>
                    </div> 
                

            </div>
        );
    }
}

