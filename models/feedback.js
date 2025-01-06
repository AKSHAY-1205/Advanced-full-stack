var mdb = require('mongoose')
var feedbackSchema = mdb.Schema({
    firstName: String,
    email: String,
    feedback: String
})
var feedback_schema = mdb.model("feedback", feedbackSchema)
module.exports = feedback_schema;