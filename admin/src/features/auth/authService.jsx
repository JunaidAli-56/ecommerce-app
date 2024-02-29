import axios from 'axios'
import base_url from '../../utils/base_url';

// const userToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : null;
// const config = {
//     headers: {
//         Authorization: `Bearer ${userToken.token}`,
//         Accept: "application/json",
//     }
// }
const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}user/admin-login`, userData);
        // console.log('Login successful:', response.data);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
// const getOrders = async () => {
//     try {
//         console.log(userToken.token)
//         const response = await axios.get(`${base_url}user/get-orders/`, config)
//         return response.data;
//     } catch (error) {
//         console.error(error)
//     }
// }
const getOrders = async () => {
    try {
        // Retrieve the user token from localStorage
        const userToken = JSON.parse(localStorage.getItem("user")).token;

        // Include the token in the request headers
        const config = {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        };

        // Make the request with the configured headers
        const response = await axios.get(`${base_url}user/get-orders/`, config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


const authService = {
    login,
    getOrders,
};

export default authService;
