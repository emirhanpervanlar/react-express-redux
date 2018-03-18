import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes/web';
import mongoose from 'mongoose';
import User from './model/User';
mongoose.connect('mongodb://db_admin:a1234@ds151908.mlab.com:51908/react_test');


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

AuthRouter(app);


app.get('/',function(req,res){

    res.send("GET API")
});



app.post('/',function(req,res){
});


app.listen(3300,function(){
    console.log("Server listening ...")
})



 /* ÖRNEK KODLAR


 //  COLECTION KEY İŞLEMLERİ

 //   const user = new User();
 //    user.update({
 //        // buraya bir filitre vermezsek bütün verileri düzenler
 //    },{
 //       $unset : { // colection lardan bir key i silmeye yarar
 //           "point": ""
 //       }
 //
 //        // $rename : {
 //        //     point : "puan" // keylerin isimlerini değiştirmeyi sağlar. Pointlerin hepsini puan yapacal
 //        // }
 //    },{
 //        multi : true
 //    }).then((data)=>{
 //    res.send("çalıştı");
 // });


// GENİŞ UPDATE ÖRNEK KULLANIMI

var newuser = User();
newuser.update({
    name : "Kemal",
    "phone.phoneType" : "Mobile", // Array içerisinde arama/filitreleme yapma
    // array için set farklıdır aşağıda örneği var

    age : {
        $gte : 20 // 20  üzerileri filitreledi
        // $lte : 10    10'dan küçükleri
    }
},{
    $push : { // diğer özellikleri https://docs.mongodb.com/manual/reference/operator/update/push/
        newpoint : 30 // güncelleme yerine yeni alan ekler
    }
},{
    multi:true, // çoklu girdilere izin verir
    upsert : true // filitrede belirtilen değer varsa update eder yoksa yeni veri girişi yapar

});

// UPDATE 2. FONKSİYON ÖRNEKLERİ update({},{*****},{})
// diğerleri https://docs.mongodb.com/manual/reference/operator/update/set/
// $set : { // ARRAY İÇİN SET
//  "phone.$.phoneNumber" : 564654654,
// }
// $set : {
//     point : 25   // $set ifadesi değeri değiştiriyor.
// }
// $inc : {
//     point :5 // olan değeri verdiğimiz değer kadar artırır 10 -> 15
//
// }
// $mul : {
//     point : 0.05 // o anki veriyi %5 ile çarpar
// }
// $min : {
//     point : 30 // o anki değer bu değerden küçükse update eder
// }
// $max : {
//     point : 30 // o anki değer bu değerden büyükse update eder
// }




// var newuser = User();
// newuser.email = "deneme@gmail.com";
// newuser.fullName = "Hasan Karlı";
// newuser.password = "1234";
// newuser.save().then( // ilk fonksiyon çalıştığında ikincisi çalışmadığında kullanılır
//     (data)=>{
//     res.send(data);
//     },
//     (err)=>{
//         res.send(err)
//     }
// );


// SELECT İŞLEMİ İÇİN ÖRNEK KOD
//
// // SELECT işlemi için örnek kod
// app.get('/',function(req,res){
//     // Cat.findOne({name : "Maviş"},{name:1,_id:0}).then((data)=>{
//     //     res.send(data);
//     // })
//     // Cat.find({},{name:1,_id:0}).then((data)=>{
//     //     res.send(data);
//     // })
//     res.send("GET API")
// });

// INSERT işlemi için örnek kod
// const kitty = new Cat();
// kitty.name = "Maviş";
// kitty.save().then((data) =>{
//     res.send(data);
// });
//
// // DELETE işlemi için örnek kod
//
// app.delete('/',function(req,res){
//    Cat.findOne({name:"Boncuk"}).then((data)=>{
//        if(data != null){
//            data.remove().then(()=>{
//                res.send("silindi");
//            });
//        }else{
//            res.send("veri yok kardeş");
//        }
//
//    });
// });
//
// // UPDATE işlemi için örnek kod
// app.put('/',function(req,res){
//
//     //update ilk parametre arama
//     Cat.update({name:"Maviş"},{
//         $set: {
//             name: "Boncuk",
//         }
//     }).then(x => {
//         // x ifadesi responsu alır
//         res.send(x);
//     });
// })
*/