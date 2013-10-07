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

	// try to get user's geo-location
    if (navigator.geolocation) {
    
    	// geolocation code
    	navigator.geolocation.getCurrentPosition(success, error);
    
    	// success function
    	function success(pos) {
    		var mapLat = pos.coords.latitude;
    		var mapLong = pos.coords.longitude;
    		google.maps.event.addDomListener(window, 'load', initialize(37.869154, -122.290768, "map-cafe"));
    		google.maps.event.addDomListener(window, 'load', initialize(mapLat, mapLong, "map-user"));
    	};
    
    	// error function
    	function error() {
    		alert("error")
    	};
    
    }

});




