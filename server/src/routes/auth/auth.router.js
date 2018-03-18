import express from 'express';
import config from '../../config'


const users = [
    {
        Firstname : "Ahmet",
        Lastname : "Celil",
        email : "deneme@gmail.com",
        password : "test123"
    }
]

const route = () =>{

    const router = new express.Router();

    router.route('/login').post((req,res)=>{
        const { email,password } = req.body;

        const user =  users.find((user) => user.email === email && user.password === password);

        if(!user){
            res.send({
                status : false,
                message : "Kullanıcı adı veya şifre hatalı !"
            });
        }else{
            res.send({
                status : true,
                message : "Giris başarılı !"
            });
        }


        res.send("ok");
    });

    return router;
}


export default {
    route,
    routePrefix : '/'+config.version+'/auth'
}