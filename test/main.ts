import WMAN from "../index";

import * as chai from "chai"

const expect = chai.expect
let WpaMan

before(function () {
    WpaMan = new WMAN(__dirname + "/../wpa_supplicant.example.conf");
})


describe('wifilist', function () {
    it('is started', function () {

        expect(WpaMan.listwpa).to.be.ok
    })


    it('There is a list of networks', function () {

        expect(WpaMan.listwpa).to.be.an("Array")
    })


    it('network is an object', function () {

        expect(WpaMan.listwpa[0]).to.be.an("object")
    })
    it('network has property: essid, #psk, psk', function () {

        expect(WpaMan.listwpa[0]).to.have.property("ssid")
        expect(WpaMan.listwpa[0]).to.have.property("psk")
        expect(WpaMan.listwpa[0]).to.have.property("#psk")

        expect(WpaMan.listwpa[1]).to.have.property("ssid")
        expect(WpaMan.listwpa[1]).to.have.property("psk")
        expect(WpaMan.listwpa[1]).to.have.property("#psk")


    })




    it('can add a wpa network', function (done) {

        WpaMan.addwpa('zbao', 'migrhtrthrcio').then(function (a) {
            expect(a).to.be.ok

            done()
        }).catch(function (err) {
            expect(err).to.not.exist
            done()

        })


    })

    it('can remove a wpa network', function (done) {

        WpaMan.removewpa('bao').then(function (a) {
            expect(a).to.be.ok

            done()
        }).catch(function (err) {
            expect(err).to.not.exist
            done()

        })


    })

})



