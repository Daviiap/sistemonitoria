const FormModel = require('../models/form.model')

const getAll = async (req, res) => {
  const formSubmissions = await FormModel
    .find()
    .sort({ created_at: 1 })
    .select('matricula nome contato description closed created_at')

  formSubmissions.sort((formItem1, formItem2) => {
    let compare

    if (formItem1.closed && formItem2.closed) {
      compare = 0
    } else if (formItem1.closed && !formItem2.closed) {
      compare = 1
    } else {
      compare = -1
    }

    return compare
  })
  return res.status(200).json(formSubmissions)
}

module.exports = getAll