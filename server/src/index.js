import express from 'express';

const app = express();

app.get('/',function(req,res){
    res.send('res API');
});


app.listen(3300,function(){
    console.log("Server listening ...")
})