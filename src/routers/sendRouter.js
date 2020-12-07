const express = require('express')
const router = new express.Router
const sendEmail = require('../emails/email.js')


router.post('/send', async (req, res) => {
    try {
        await sendEmail(req.body.name, req.body.email, req.body.message)
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router