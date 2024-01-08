const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');


// write data always before req otherwise it will not give you response
const sendEmail = asyncHandler(async (data, req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        // port: 587,
        // secure: false,
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Hey Jarviz 👻" <abc@gmail.com>', // sender address
            to: data.to, // list of receivers
            subject: data.subject, // Subject line
            text: data.text, // plain text body
            html: data.html, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    }
    main().catch(console.error);

})
module.exports = sendEmail;