import axios from "axios";
import base_url from "../../utils/base_url";
import config from "../../utils/axiosconfig";

const getBrands = async () => {
    try {
        const response = await axios.get(`${base_url}brand/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
const createBrand = async (brand) => {
    try {
        const response = await axios.post(`${base_url}brand/`, brand, config)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const barndService = {
    getBrands,
    createBrand,
}

export default barndService;