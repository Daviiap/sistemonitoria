const FormModel = require('../models/form.model')

const getAll = async (req, res) => {
  const formSubmissions = await FormModel
    .find()
    .sort({ created_at: 1 })
    .select('matricula nome contato description created_at')

  return res.status(200).json(formSubmissions)
}

module.exports = getAll