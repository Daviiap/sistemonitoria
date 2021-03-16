const { json } = require('express')
const express = require('express')
const router = express.Router()

router.use(json())

router.get('/', (req, res) => {
  return res.status(200).json({ status: 'running' })
})

router.post('/submit', (req, res) => {
  const { matricula, nome, contato, description, image } = req.body

  console.log({ matricula, nome, contato, description, image });

  return res.status(200).json({ matricula, nome, contato, description, image })
})

module.exports = router
