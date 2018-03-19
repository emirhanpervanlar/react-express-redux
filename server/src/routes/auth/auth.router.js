import express from 'express';
import config from '../../config'
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../../models/User';


const route = () =>{
    const router = new express.Router();
// SIGIN ROUTER
    router.route('/login').post((req,res)=>{
        const { email,password } = req.body;
        const hashpass = crypto.createHmac('sha256', config.passSecret).update(password).digest('hex');
        User.findOne({ email: email,password:hashpass}).then((user)=>{
            if(user){
                const token = jwt.sign({userId: user._id},config.jwtSecret);
                User.update({email:email},{
                    $set : {
                        lastLogin : new Date()
                    }
                }).then(()=>{});
                res.send({
                    status : true,
                    token : token,
                });
            }else{
                res.send({
                    status : false,
                });
            }
        });
    });

// SIGNUP ROUTER
    router.route('/sign-up').post((req,res)=>{
        const {email,password} = req.body;
        const passwordHashed = crypto.createHmac('sha256', config.passSecret).update(password).digest('hex');
        const newUser = new User({
            email : email,
            password : passwordHashed
        });

        newUser.save().then((data)=>{
            res.send({ status : true, user : data})
        },(x)=>{
            res.send({ status : false, error : x})
        });
    });

    return router;
}


export default {
    route,
    routePrefix : '/'+config.version+'/auth'
}