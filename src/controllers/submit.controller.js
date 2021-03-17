const FormModel = require('../models/form.model')

const submit = async (req, res) => {
  const { matricula, nome, contato, description, image } = req.body

  await FormModel.create({
    matricula,
    nome,
    contato,
    description,
    image
  })

  const date = new Date()
  console.log('--------------------------------------------------')
  console.log(`[${date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}]: Formulário submetido!`)
  console.log(` Nome: ${nome}`)
  console.log(` Matrícula: ${matricula}`)
  console.log(` Contato: ${contato}`)
  console.log('--------------------------------------------------')


  return res.status(200).json({ matricula, nome, contato, description, image })
}

module.exports = submit
