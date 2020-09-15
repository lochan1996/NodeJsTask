import React, { Component } from 'react';
import Base from './Base';
import createTodos from './helper/createTodo'
import { Link } from 'react-router-dom';
import { CountryDropdown } from 'react-country-region-selector';




export default class createTodo extends Component {
    constructor(props) {
        super(props)
        
        this.onChangeTodoHeading = this.onChangeTodoHeading.bind(this)
        
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            todo_heading: '',            
            todo_completed: false,
            success: "",
            failed:"",
            country: '',
            date:''
        }
    }
    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        var date = new Date().toLocaleDateString("en-US");
        this.setState({ date });
    }
    onChangeTodoHeading = (e) => {
        this.setState({
            todo_heading: e.target.value
        })

    }
    

    selectCountry(val) {
        console.log('val',val)
        this.setState({ country: val });
    }
    successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success" style={{ display: this.state.success ? "" : "none" }}>
                        New Task Created <Link to="/allOrders">Check Here</Link>
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
    onSubmit(e) {
        e.preventDefault()

        const newTodo = {
            Product: this.state.todo_heading,
            date: this.state.date,
            country: this.state.country
        }
        

        if (typeof window !== undefined) {
                
                createTodos(newTodo).then(response => {
                    
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
            
        }
        

        this.setState({
            todo_heading: '',            
            success: true,
            country: '',
            date:''
        })

    }

    
    render() {
        
        return (
            <>
                <Base title="Create Order" />
                <div>
                    {this.successMessage()}
                    {this.errorMessage()}

                    
                <div style={{ marginTop: 20 }}>
                        {
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label> ORDER: </label>
                                    <input type="text" className="form-control" value={this.state.todo_heading} onChange={this.onChangeTodoHeading} required />
                                </div>
                                <div className="form-group">
                                    <label> Country: </label>
                                    <CountryDropdown
                                        value={this.state.country}
                                        onChange={(val) => this.selectCountry(val)} required />
                                </div>
                                
                                
                                <div className="form-group">
                                    <input type="submit" value="Create ToDo" className="btn btn-primary" />
                                </div>
                                

                            </form> 

                        }
                    </div>
                    
                </div>
                </>
        );
    }
}

