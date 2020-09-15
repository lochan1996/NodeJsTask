import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import TodoLists from './components/TodoLists';
import createTodo from './components/createTodo';
import viewToDo from './components/viewToDo'
import editToDo from './components/editToDo';
import Menu from './components/menu';
import Base from './components/Base';
import AdminDashBoard from './components/AdminDashBoards';





function App() {
    return (
        <Router>
            <div className="container">
                
                <h2>Products Task APP</h2>
                <Route path="/" exact component={TodoLists} />
                <Route path="/edit/:id" component={editToDo} />
                <Route path="/view/:id" component={viewToDo} />
                <Route path="/create" component={createTodo} /> 
                <Route path="/allOrders" component={AdminDashBoard} />
                
                



        </div>
            
        </Router>
  );
}

export default App;
