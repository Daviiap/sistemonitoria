const { json } = require('express')
const express = require('express')
const submit = require('./controllers/submit.controller')
const router = express.Router()

router.use(json())

router.get('/', (req, res) => {
  return res.status(200).json({ status: 'running' })
})

router.post('/submit', submit)

module.exports = router
