import axios from "axios";
import base_url from '../../utils/base_url';

const getCategory = async () => {
    try {
        const response = await axios.get(`${base_url}category/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const proCategoryService = {
    getCategory,
}

export default proCategoryService;