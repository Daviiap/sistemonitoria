const { json } = require('express')
const express = require('express')
const submit = require('./controllers/submit.controller')
const getAll = require('./controllers/getAll.controller')
const router = express.Router()

router.use(json())

router.get('/', (req, res) => {
  return res.status(200).json({ status: 'running' })
})

router.post('/submit', submit)
router.get('/get', getAll)

module.exports = router
