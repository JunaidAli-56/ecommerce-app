import axios from "axios";
import base_url from "../../utils/base_url";

const getColors = async () => {
    try {
        const response = await axios.get(`${base_url}color/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const colorService = {
    getColors,
}

export default colorService;