
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


sendEmail = (name, email, message) => {
    sgMail.send({
        to: process.env.RECIPIENT_EMAIL,
        from: process.env.SENDER_EMAIL, // Change to your verified sender
        subject: `New Message`,
        text: `From: ${name}. Their email address is: ${email}. Message: ${message}`
    })
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}




module.exports = sendEmail