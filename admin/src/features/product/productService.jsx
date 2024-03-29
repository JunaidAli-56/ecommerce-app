import axios from "axios";
import base_url from '../../utils/base_url';
import config from "../../utils/axiosconfig";

const getProducts = async () => {
    try {
        const response = await axios.get(`${base_url}product/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
const createProducts = async (product) => {
    try {
        const response = await axios.post(`${base_url}product/`, product, config)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const productService = {
    getProducts,
    createProducts,
}

export default productService;