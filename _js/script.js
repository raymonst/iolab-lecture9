// google maps code
var map;
function initialize(lat, long, targetID) {
    var mapOptions = {
    	zoom: 14,
    	center: new google.maps.LatLng(lat, long),
    	mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById(targetID), mapOptions);
}


// document ready
$(document).ready(function() {

	// first, see if you can get the user's geo-location


    if (navigator.geolocation) {
        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        console.log(navigator.geolocation);
        function success(pos) {
	        var crd = pos.coords;
/*
	        console.log('Your current position is:');
	        console.log('Latitude : ' + crd.latitude);
	        console.log('Longitude: ' + crd.longitude);
	        console.log('More or less ' + crd.accuracy + ' meters.');
*/
	        
	        var mylat = crd.latitude;
	        var mylong = crd.longitude;
	        mylatlong = [mylat, mylong];
	        return mylatlong;    
        };


/*         var latlong = success(); */

        function error(err) {
	        console.warn('ERROR(' + err.code + '): ' + err.message);
        };       

        navigator.geolocation.getCurrentPosition(success,error,options);       
	    // then, use the navigator.geolocation.getCurrentPosition() method to get the latitude-longitude coordinates

        google.maps.event.addDomListener(window, 'load', initialize(latlong[0], latlong[1], "map-user"));
	    // here is an example of how to draw a map with Google Maps API; this refers to the "our location" map
    	//google.maps.event.addDomListener(window, 'load', initialize(37.869154, -122.290768, "map-cafe"));
   
    }

});




