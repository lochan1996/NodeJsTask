import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Base from './Base';



const API = 'http://localhost:8000/api'


export default class viewToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo_heading: '',
            orderID:'',
            success: "",
            country: '',
            date: ''
        }

    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/view/' + this.props.match.params.id).then(response => {
            console.log(response)
            this.setState({
                orderID: response.data._id,
                todo_heading: response.data.Product,
                date: response.data.date,
                country: response.data.country
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    

    




    render() {

        return (

            <div>
                <Base title="View Order" />

                <div>

                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        
                        
                        <tbody>
                            <tr>
                                <th>OrderID</th>
                                <td>{this.state.orderID}</td>
                                <th>ProductName</th>
                                <td>{this.state.todo_heading}</td>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <td>{this.state.country}</td>
                                <th>Date</th>
                                <td>{this.state.date}</td>
                            </tr>
                            {/*this.todolist()*/}
                        </tbody>

                    </table>
                </div>


            </div>
        );
    }
}

