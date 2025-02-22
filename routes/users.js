const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://rounakpradhan13feb:newproject@cluster0.ls9px.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    },
    message:{
      type: String,
    }
})

module.exports = mongoose.model('User', userSchema)