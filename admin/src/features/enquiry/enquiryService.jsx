import axios from "axios";
import base_url from "../../utils/base_url";

const getEnquiries = async () => {
    try {
        const response = await axios.get(`${base_url}contact/`)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const enquiryService = {
    getEnquiries,
}

export default enquiryService;