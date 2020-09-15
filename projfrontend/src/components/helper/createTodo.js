const API = 'http://localhost:8000/api/'

const createTodos = (newTodo) => {
    console.log(newTodo)
    return fetch(`${API}user/add`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export default createTodos;