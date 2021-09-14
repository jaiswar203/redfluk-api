import mongoose from 'mongoose'

const Admin=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    id:{
        type: String
    }
})

const AdminLogin=mongoose.model('AdminLogin',Admin)

export default AdminLogin