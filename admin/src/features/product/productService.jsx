import axios from "axios";
import base_url from '../../utils/base_url';

const getProducts = async () => {
    try {
        const response = await axios.get(`${base_url}product/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const productService = {
    getProducts,
}

export default productService;