const FormModel = require('../models/form.model')

const update = async (req, res) => {
  const { submissionId } = req.params

  const formSubmission = await FormModel.findById(submissionId)

  if (formSubmission) {
    formSubmission.closed = !formSubmission.closed
    await formSubmission.save()
  }

  return res.status(200).json(formSubmission)
}

module.exports = update