var WMAN = require("../index");
var WpaMan = new WMAN(__dirname + "/../wpa_supplicant.example.conf");
WpaMan.add('bao', 'migrhtrthrcio').then(function (a) {
    console.log(WpaMan.list.length);
    WpaMan.remove('bao').then(function (a) {
        console.log(WpaMan.list.length);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLElBQUksV0FBUyxVQUFVLENBQUMsQ0FBQztBQUdoQyxJQUFJLE1BQU0sR0FBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUtsRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDO0lBRTdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLENBQUM7UUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoidGVzdC9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdNQU49cmVxdWlyZShcIi4uL2luZGV4XCIpO1xuXG5cbmxldCBXcGFNYW4gPW5ldyBXTUFOKF9fZGlybmFtZStcIi8uLi93cGFfc3VwcGxpY2FudC5leGFtcGxlLmNvbmZcIik7XG5cblxuXG5cbldwYU1hbi5hZGQoJ2JhbycsJ21pZ3JodHJ0aHJjaW8nKS50aGVuKGZ1bmN0aW9uKGEpe1xuXG4gICAgY29uc29sZS5sb2coV3BhTWFuLmxpc3QubGVuZ3RoKSAgICBcbldwYU1hbi5yZW1vdmUoJ2JhbycpLnRoZW4oZnVuY3Rpb24oYSl7XG5cbiAgICAgICAgY29uc29sZS5sb2coV3BhTWFuLmxpc3QubGVuZ3RoKSAgICBcbn0pXG59KVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9