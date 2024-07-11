const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    mail: String,
    Password: String
})

const EmployeeModel = new mongoose.model("employee", EmployeeSchema);

module.exports=EmployeeModel;