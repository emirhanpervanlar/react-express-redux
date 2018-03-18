import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName : String,
    email : String,
    password : String,
    dateCreated : { type: Date, default: Date.now },
    dateUpdated : { type: Date, default: Date.now },
    phoneNumbers : [{
        phoneType: String,
        phoneNumber: String,

    }],
});

const User = mongoose.model('User',userSchema);


export default User;

/* ÖRNEK KODLAR
// const User = mongoose.model('User',userSchema,'kullanicilar'); colection adını kendim veriyorum

// Validation tanımlamaları

        // validate: {
        //     validator: function(v) {
        //         return /\d{3}-\d{3}-\d{4}/.test(v);
        //     },
        //     message: '{VALUE} is not a valid phone number!'
        // }, // validasyonlar bu şekilde veriliyor

// socialNetwork : Object, // ekleme yaparken istediğin veriyi buraya atabilirsin

// UNİEQ REQUİRE OLMA İŞLEMLERİ VE HATA MESAJLARI
//  tckimlik : {
//         type : String,
//         required : true,  // Alanı zorunlu kılar
//         // required : [true,"Lütfen bir tc giriniz "]  Hata mesajını kendimiz oluşturmak istiyorsak
//         // required : "Lütfen bir tc giriniz " aynı işlem üstteki daha sağlıklı
//         unique : true, // benzersiz alan yine [true,"bu alan benzersiz olmalı"]
//
//     }

// MİN MAX İŞLEMLERİ
// age : {
//         type : Number,
//         min : 6,
//         max : 25
//         // min : [6," 6 dan büyük olmalıdır"],
//         // max : [99," 99 dan küçük olmalıdır"],
//     }
*/
