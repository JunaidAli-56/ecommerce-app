import axios from "axios";
import base_url from '../../utils/base_url';

const getBlogCategory = async () => {
    try {
        const response = await axios.get(`${base_url}blog-category/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const blogCategoryService = {
    getBlogCategory,
}

export default blogCategoryService;