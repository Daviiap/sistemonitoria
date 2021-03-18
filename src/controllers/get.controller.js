const FormModel = require('../models/form.model')

const get = async (req, res) => {
  const { submissionId } = req.params

  const formSubmission = await FormModel.findById(submissionId)

  return res.status(200).json(formSubmission)
}

module.exports = get