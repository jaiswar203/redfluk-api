import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import AdminLogin from '../models/AdminLogin.js'

export const signin=async(req,res)=>{
    const {email,password}=req.body ;

    try {
        const existingUSer=await AdminLogin.findOne({email})

        if(!existingUSer) return res.status(401).json({message:'Access Denied'}) ;

        const isPassword=await bcrypt.compare(password,existingUSer.password)

        if(!isPassword) return res.status(400).json({message:'incorrect pass'})

        const token=jwt.sign({email: existingUSer.email, id:existingUSer._id},'admin',{expiresIn:'2h'})

        res.status(202).json({result: existingUSer,token})
    } catch (error) {
        res.status(500).json(error)
    }
}

export const signup=async(req,res)=>{
    const {email,password,cPassword,name}=req.body

    try {
        const existingUser=await AdminLogin.findOne({email})

        if(existingUser) return res.status(400).json({message:'Admin Already Exist'})

        if(password!==cPassword) return res.status(400).json({message:'Password Does not match '})

        const hashesPass=await bcrypt.hash(password,12)

        const result=await AdminLogin.create({email,password:hashesPass,name})

        const token=jwt.sign({email:result.email, id :result._id},'admin',{expiresIn:'2h'})

        res.status(200).json({result,token})
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
        console.log(error)
    }
}