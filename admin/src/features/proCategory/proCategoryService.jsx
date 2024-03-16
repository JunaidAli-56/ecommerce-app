import axios from "axios";
import base_url from '../../utils/base_url';
import config from "../../utils/axiosconfig";

const getCategory = async () => {
    try {
        const response = await axios.get(`${base_url}category/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const createCategory = async (prodCategory) => {
    try {
        const response = await axios.post(`${base_url}category/`, prodCategory, config)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const proCategoryService = {
    getCategory,
    createCategory
}

export default proCategoryService;