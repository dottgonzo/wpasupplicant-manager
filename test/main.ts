import WMAN=require("../index");


let WpaMan =new WMAN(__dirname+"/../wpa_supplicant.example.conf");




WpaMan.add('bao','migrhtrthrcio').then(function(a){

    console.log(WpaMan.list.length)    
WpaMan.remove('bao').then(function(a){

        console.log(WpaMan.list.length)    
})
})
