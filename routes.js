const { json } = require('express')
const express = require('express')
const router = express.Router()

router.use(json())

router.get('/', (req, res) => {
  return res.status(200).json({ status: 'running' })
})

router.post('/submit', (req, res) => {
  const { matricula, nome, contato, description, image } = req.body

  const date = new Date()
  console.log('--------------------------------------------------')
  console.log(`[${date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}]: Formulário submetido!`)
  console.log(` Nome: ${nome}`)
  console.log(` Matrícula: ${matricula}`)
  console.log(` Contato: ${contato}`)
  console.log('--------------------------------------------------')


  return res.status(200).json({ matricula, nome, contato, description, image })
})

module.exports = router
