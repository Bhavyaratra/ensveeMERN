const User = require('../models/User')

const register = async (req,res) =>{
            //taking data from req body
    const {usid,emid,pswd} = req.body;

    try{
        //async function creating new user in db
        const newUser = await User.create({
            usid,emid,pswd
        })
        
        res.status(201).json({
            success: true,
            data: newUser,    //sending new user object
        });
    }catch(error){
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

const login =async (req,res) =>{
    const{emid,pswd} = req.body;
    
    if(!emid || !pswd){
        res.status(400).json({
            success:false,
            error: "please provide email and password"
        })
    }

    try{                                           //explicitly asking for pswrd with(+) email
        const user = await User.findOne({emid}).select("+pswd");

        if(!user){
            res.status(404).json({
                success: false,
                error: "Invalid Credentials"
            })
        }
                                //takes password from body
        const isMatch =  pswd === user.pswd ? true : false
        
        if(!isMatch){
            res.status(404).json({
                success: false,
                error:"Invalid Credentials"
            })
        }else{
        
        res.status(200).json({
            success: true,
            data: user,
        });
    }

    }catch(err){
    
        res.status(500).json({
            success: false,
            error: err.message
        });
    };

};


module.exports = {register, login}