const asyncHander = require('express-async-handler');
const fs = require('fs')
const { cloudinaryImgUpload, cloudinaryImgDelete } = require('../utils/cloudinary');

const uploadImages = asyncHander(async (req, res) => {
    try {
        const uploader = (path) => cloudinaryImgUpload(path, 'images');
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path)
            urls.push(newPath)
            // try {
            //     fs.unlinkSync(path);
            // } catch (unlinkError) {
            //     throw new Error(unlinkError);
            // }
        }
        const images = urls.map((file) => {
            return file;
        })
        res.json(images);
    } catch (error) {
        throw new Error(error)
    }
})
const deleteImages = asyncHander(async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = cloudinaryImgDelete(id, 'images');
        res.json({
            message: "Image Deleted"
        });
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = {
    uploadImages,
    deleteImages,
}