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
    
	    // then, use the navigator.geolocation.getCurrentPosition() method to get the latitude-longitude coordinates
 
	    // here is an example of how to draw a map with Google Maps API; this refers to the "our location" map
    	google.maps.event.addDomListener(window, 'load', initialize(37.869154, -122.290768, "map-cafe"));
   
    }

});




