const TestModel = require('../models/test.model')

const testSQS = async (req, res) => {
  const { reader, ReceiptHandle } = req.body

  await TestModel.create({
    reader,
    ReceiptHandle
  })

  return res.status(200).json({ reader, ReceiptHandle })
}

module.exports = testSQS
