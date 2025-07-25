const mongoose = require('mongoose');

const studentAddress = {
    flatNo: { type: Number },
    streetad: { type: String }
}

const studentDetails = new mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    Mobilenumber: { type: Number, required: true },
    Address: studentAddress,


    
})

const studentdata = mongoose.model('studentdata', studentDetails);

export default studentdata;