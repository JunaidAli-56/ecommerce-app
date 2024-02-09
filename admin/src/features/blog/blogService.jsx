import axios from "axios";
import base_url from "../../utils/base_url";

const getBlogs = async () => {
    try {
        const response = await axios.get(`${base_url}blog/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const blogService = {
    getBlogs,
}

export default blogService;