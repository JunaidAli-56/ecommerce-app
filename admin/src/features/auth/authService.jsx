import axios from 'axios'
import base_url from '../../utils/base_url'


const login = async (userData) => {
    try {
        const response = await axios.post(`${base_url}user/admin-login`, userData);
        console.log('Login successful:', response.data);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data))
        }
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

// const login = async (userData) => {
//     try {
//         const response = await axios.post(`${base_url}user/admin-login`, userData);
//         console.log('Login successful:', response.data);
//         return response.data; // Optionally, return data for further processing in the calling component
//     } catch (error) {
//         console.error('Login failed:', error);
//         throw error; // Rethrow the error for further handling in the calling component
//     }
// };

const authService = {
    login,
};

export default authService;
