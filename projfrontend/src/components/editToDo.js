import React, { Component } from 'react';
import Axios from 'axios';
import Base from './Base';
import editToDos from './helper/editTodo' 
import { Link } from 'react-router-dom';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';




export default class editToDo extends Component {
    constructor(props) {
        super(props)
        
        this.onChangeTodoHeading = this.onChangeTodoHeading.bind(this)
        
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            todo_heading: '',
            todo_completed: false,
            success: "",
            country: '',
            date: ''
        }
    }

    componentDidMount() {
        var date = new Date().toDateString();
        this.setState({ date });
        Axios.get('http://localhost:8000/api/view/' + this.props.match.params.id).then(response => {
            console.log(response)
            this.setState({
                todo_heading: response.data.Product,
                date: this.state.date,
                country: response.data.country
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    
    onChangeTodoHeading = (e) => {
        this.setState({
            todo_heading: e.target.value
        })

    }
    selectCountry(val) {
        console.log('val', val)
        this.setState({ country: val });
    }
    successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{ display: this.state.success ? "" : "none" }}>
                        Order is Edited <Link to="/allOrders">Check Here</Link>
                    </div>
                </div>
            </div>
        );
    }
    errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger" style={{ display: this.state.failed ? "" : "none" }}>
                        Opps, Product already exists
                    </div>
                </div>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault()
        const obj = {
            Product: this.state.todo_heading,
            date: this.state.date,
            country: this.state.country
        }
        
        let updateId = this.props.match.params.id
        editToDos(obj, updateId).then(response => {

            console.log('response', response)
            if (response.err) {
                this.setState({
                    failed: true,
                    success: false
                })
            }



        }).catch((err) => {
            console.log(err)
        })
        this.setState({
            success: true
        })

    }


    render() {
        return (
            <div>
                <Base title="Update Order" />
                {this.successMessage()}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> ORDER: </label>
                        <input type="text" className="form-control" value={this.state.todo_heading} onChange={this.onChangeTodoHeading} required />
                    </div>
                    <div className="form-group">
                        <label> Country: </label>
                        <CountryDropdown
                            value={this.state.country}
                            onChange={(val) => this.selectCountry(val)} required/>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Update Order" className="btn btn-primary" />
                    </div>


                </form> 
            </div>
        );
    }
}

