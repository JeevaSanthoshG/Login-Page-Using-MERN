const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee.js');

const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017");

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json("Registered successfully"))
    .catch(err => res.json(err))
})

app.post('/login', async (req, res) => {
    try {
        const { mail,Password } = req.body; 
        const employee = await EmployeeModel.findOne({ mail: mail }); 
        if(employee)
        {
            if(employee.Password===Password)
            {
                res.json("Success");
            }
            else
            {
                res.json("Password incorrect");
            }
        }
        else
        {
            res.json("User not found");
            res.status(200).send({message: "User Not Found"})
        }
        // console.log(employee);
  
    } catch (error) {
        console.error(error);
        console.log('Internal Server Error');
    }
});
app.listen(5000, () => {
    console.log("Server running")
})