// js timing function wrap
window.setInterval(function(){

    console.log('scripts loaded');

    // Get space station coordinates (first API)
    function spaceStation(){
      $.getJSON('http://api.open-notify.org/iss-now.json?callback=?' , function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];
      });
    }
    // Second API --> get this ^ into the endpoint
    var url = "";
    var data = "";
    var html = "";

}, 5000);
