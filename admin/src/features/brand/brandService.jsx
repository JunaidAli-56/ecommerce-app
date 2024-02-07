import axios from "axios";
import base_url from "../../utils/base_url";

const getBrands = async () => {
    try {
        const response = await axios.get(`${base_url}brand/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const barndService = {
    getBrands,
}

export default barndService;