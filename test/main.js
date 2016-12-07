"use strict";
var index_1 = require("../index");
var chai = require("chai");
var expect = chai.expect;
var WpaMan;
before(function () {
    WpaMan = new index_1.default(__dirname + "/../wpa_supplicant.example.conf");
});
describe('wifilist', function () {
    it('is started', function () {
        expect(WpaMan.listwpa).to.be.ok;
    });
    it('There is a list of networks', function () {
        expect(WpaMan.listwpa).to.be.an("Array");
    });
    it('network is an object', function () {
        expect(WpaMan.listwpa[0]).to.be.an("object");
    });
    it('network has property: essid, #psk, psk', function () {
        expect(WpaMan.listwpa[0]).to.have.property("ssid");
        expect(WpaMan.listwpa[0]).to.have.property("psk");
        expect(WpaMan.listwpa[0]).to.have.property("#psk");
        expect(WpaMan.listwpa[1]).to.have.property("ssid");
        expect(WpaMan.listwpa[1]).to.have.property("psk");
        expect(WpaMan.listwpa[1]).to.have.property("#psk");
    });
    it('can add a wpa network', function (done) {
        WpaMan.addwpa('zbao', 'migrhtrthrcio').then(function (a) {
            expect(a).to.be.ok;
            done();
        }).catch(function (err) {
            expect(err).to.not.exist;
            done();
        });
    });
    it('can remove a wpa network', function (done) {
        WpaMan.removewpa('bao').then(function (a) {
            expect(a).to.be.ok;
            done();
        }).catch(function (err) {
            expect(err).to.not.exist;
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsVUFBVSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQTtZQUVsQixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUc7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFBO1lBQ3hCLElBQUksRUFBRSxDQUFBO1FBRVYsQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIiwiZmlsZSI6InRlc3QvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXTUFOIGZyb20gXCIuLi9pbmRleFwiO1xuXG5pbXBvcnQgKiBhcyBjaGFpIGZyb20gXCJjaGFpXCJcblxuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3RcbmxldCBXcGFNYW5cblxuYmVmb3JlKGZ1bmN0aW9uICgpIHtcbiAgICBXcGFNYW4gPSBuZXcgV01BTihfX2Rpcm5hbWUgKyBcIi8uLi93cGFfc3VwcGxpY2FudC5leGFtcGxlLmNvbmZcIik7XG59KVxuXG5cbmRlc2NyaWJlKCd3aWZpbGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpdCgnaXMgc3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBleHBlY3QoV3BhTWFuLmxpc3R3cGEpLnRvLmJlLm9rXG4gICAgfSlcblxuXG4gICAgaXQoJ1RoZXJlIGlzIGEgbGlzdCBvZiBuZXR3b3JrcycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBleHBlY3QoV3BhTWFuLmxpc3R3cGEpLnRvLmJlLmFuKFwiQXJyYXlcIilcbiAgICB9KVxuXG5cbiAgICBpdCgnbmV0d29yayBpcyBhbiBvYmplY3QnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZXhwZWN0KFdwYU1hbi5saXN0d3BhWzBdKS50by5iZS5hbihcIm9iamVjdFwiKVxuICAgIH0pXG4gICAgaXQoJ25ldHdvcmsgaGFzIHByb3BlcnR5OiBlc3NpZCwgI3BzaywgcHNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGV4cGVjdChXcGFNYW4ubGlzdHdwYVswXSkudG8uaGF2ZS5wcm9wZXJ0eShcInNzaWRcIilcbiAgICAgICAgZXhwZWN0KFdwYU1hbi5saXN0d3BhWzBdKS50by5oYXZlLnByb3BlcnR5KFwicHNrXCIpXG4gICAgICAgIGV4cGVjdChXcGFNYW4ubGlzdHdwYVswXSkudG8uaGF2ZS5wcm9wZXJ0eShcIiNwc2tcIilcblxuICAgICAgICBleHBlY3QoV3BhTWFuLmxpc3R3cGFbMV0pLnRvLmhhdmUucHJvcGVydHkoXCJzc2lkXCIpXG4gICAgICAgIGV4cGVjdChXcGFNYW4ubGlzdHdwYVsxXSkudG8uaGF2ZS5wcm9wZXJ0eShcInBza1wiKVxuICAgICAgICBleHBlY3QoV3BhTWFuLmxpc3R3cGFbMV0pLnRvLmhhdmUucHJvcGVydHkoXCIjcHNrXCIpXG5cblxuICAgIH0pXG5cblxuXG5cbiAgICBpdCgnY2FuIGFkZCBhIHdwYSBuZXR3b3JrJywgZnVuY3Rpb24gKGRvbmUpIHtcblxuICAgICAgICBXcGFNYW4uYWRkd3BhKCd6YmFvJywgJ21pZ3JodHJ0aHJjaW8nKS50aGVuKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBleHBlY3QoYSkudG8uYmUub2tcblxuICAgICAgICAgICAgZG9uZSgpXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGV4cGVjdChlcnIpLnRvLm5vdC5leGlzdFxuICAgICAgICAgICAgZG9uZSgpXG5cbiAgICAgICAgfSlcblxuXG4gICAgfSlcblxuICAgIGl0KCdjYW4gcmVtb3ZlIGEgd3BhIG5ldHdvcmsnLCBmdW5jdGlvbiAoZG9uZSkge1xuXG4gICAgICAgIFdwYU1hbi5yZW1vdmV3cGEoJ2JhbycpLnRoZW4oZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGV4cGVjdChhKS50by5iZS5va1xuXG4gICAgICAgICAgICBkb25lKClcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgZXhwZWN0KGVycikudG8ubm90LmV4aXN0XG4gICAgICAgICAgICBkb25lKClcblxuICAgICAgICB9KVxuXG5cbiAgICB9KVxuXG59KVxuXG5cblxuIl19
