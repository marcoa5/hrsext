const fs = require('fs')
const firebase = require('firebase/app')
require('firebase/database')
const firebaseConfig = {
    apiKey: "AIzaSyBtO5C1bOO70EL0IPPO-BDjJ40Kb03erj4",
    authDomain: "epi-serv-job.firebaseapp.com",
    databaseURL: "https://epi-serv-job-default-rtdb.firebaseio.com",
    projectId: "epi-serv-job",
    storageBucket: "epi-serv-job.appspot.com",
    messagingSenderId: "793133030101",
    appId: "1:793133030101:web:1c046e5fcb02b42353a05c",
    measurementId: "G-Y0638WJK1X"
  };

firebase.default.initializeApp(firebaseConfig)  

fs.readdir('./SJ',(err,files)=>{
    files.map(file=>{
        fs.readFile('./SJ/' + file, 'utf-8', (err,content)=>{
            if(content.toString().substring(0,1)=='{'){
                let data = JSON.parse(content)
                
                /*let info ={}
                info = {
                    sn: data.matricola,
                    rig: data.prodotto1,
                    orem: data.orem1.replace('.',''),
                    perc1: data.perc11.replace('.','')? data.perc11.replace('.',''): 0,
                    perc2: data.perc21.replace('.','')? data.perc21.replace('.',''): 0,
                    perc3: data.perc31.replace('.','')? data.perc31.replace('.',''): 0,
                    site: data.cantiere1,
                    customer: data.cliente11,
                    docBPCS: data.docbpcs,
                    //rapp: data.rappl1,
                    //oss: data.oss1
                }
                firebase.default.database().ref('Hours/' + data.matricola.toUpperCase()).child(file.substring(9,17)).set(info)*/
                    data.firmacc1=''
                    data.firmatt1=''
                    data.rs=''
                    firebase.default.database().ref('Saved/' + data.matricola.toUpperCase()).child(file.substring(9,17)).set(data)
                
            }

        })
    })
})
