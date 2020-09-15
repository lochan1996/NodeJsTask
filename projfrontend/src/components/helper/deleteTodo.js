const API = 'http://localhost:8000/api/'

export const deleteThisOrder = (orderId) => {

    return fetch(`${API}delete/${orderId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            
        },

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}