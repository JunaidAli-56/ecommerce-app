const multer = require('multer')
const sharp = require('sharp')
const path = require('path')

const multerStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, "../public/images"))
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        callback(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
    }
})

const multerFilter = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    } else {
        callback({
            message: "Unsupported file formate"
        }, false)
    }
}

const uploadPhoto = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: 2000000 }
})


const productImageSize = async (req, res, next) => {
    if (!req.files) return next()
    await Promise.all(
        req.files.map(async (file) => {
            await sharp(file.path)
            .resize(300, 300)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/images/products/${file.filename}`);
        })
    )
    next();
}

const blogImageSize = async (req, res, next) => {
    if (!req.files) return next()
    await Promise.all(
        req.files.map(async (file) => {
            await sharp(file.path)
            .resize(300, 300)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/images/blogs/${file.filename}`);
        })
    )
    next();
}
module.exports = {
    uploadPhoto,
    productImageSize,
    blogImageSize,
}