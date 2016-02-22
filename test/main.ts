import WMAN=require("../index");


let WpaMan =new WMAN(__dirname+"/../wpa_supplicant.example.conf");




WpaMan.addwpa('bao','migrhtrthrcio').then(function(a){

    console.log(WpaMan.listwpa.length)    
WpaMan.removewpa('bao').then(function(a){

        console.log(WpaMan.listwpa.length)    
})
})
