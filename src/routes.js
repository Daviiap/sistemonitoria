const { json } = require('express')
const express = require('express')
const submit = require('./controllers/submit.controller')
const getAll = require('./controllers/getAll.controller')
const get = require('./controllers/get.controller')
const update = require('./controllers/update.controller')

const router = express.Router()

router.use(json())

router.get('/', (req, res) => {
  return res.status(200).json({ status: 'running' })
})

router.post('/submit', submit)
router.get('/getAll', getAll)
router.get('/get/:submissionId', get)
router.post('/update/:submissionId', update)

module.exports = router
