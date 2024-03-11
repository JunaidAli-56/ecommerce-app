import axios from "axios";
import base_url from '../../utils/base_url';
import config from '../../utils/axiosconfig';

const uploadImg = async (data) => {
    try {
        const response = await axios.post(`${base_url}upload/`, data, config)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}
const deleteImg = async (id) => {
    try {
        const response = await axios.delete(`${base_url}upload/delete-image/${id}`, config)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

const uploadService = {
    uploadImg,
    deleteImg
}

export default uploadService;