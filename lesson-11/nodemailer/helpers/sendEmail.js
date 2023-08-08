import nodemailer from "nodemailer";

const {UKR_NET_EMAIL, UKR_NET_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.ukr.net",
    port: 465, // 25, 465, 2525
    secure: true,
    auth: {
        user: UKR_NET_EMAIL,
        pass: UKR_NET_PASSWORD,
    }
};

const tranport = nodemailer.createTransport(nodemailerConfig);

/*
data = {
    to: "lafic23473@viperace.com",
    subject: "Test email",
    html: "<strong>Test email</strong>"
}
*/

const sendEmail = async (data) => {
    const email = {...data, from : UKR_NET_EMAIL};
    await tranport.sendMail(email);
    return true;
}

export default sendEmail;