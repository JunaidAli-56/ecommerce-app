import axios from "axios";
import base_url from "../../utils/base_url";
import config from "../../utils/axiosconfig";

const getColors = async () => {
    try {
        const response = await axios.get(`${base_url}color/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
const createColor = async (color) => {
    try {
        const response = await axios.post(`${base_url}color/`, color, config)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const colorService = {
    getColors,
    createColor
}

export default colorService;