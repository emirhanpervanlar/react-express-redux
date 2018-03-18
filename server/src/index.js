import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes/web';

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

AuthRouter(app);

app.get('/',function(req,res){
    res.send("API Page");
});

app.listen(3300,function(){
    console.log("Server listening ...")
})