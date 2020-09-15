const API = 'http://localhost:8000/api/'

const editTodos = (newTodo, updateId) => {
    return fetch(`${API}update/${updateId}`, {
        method: "PUT",
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

export default editTodos;