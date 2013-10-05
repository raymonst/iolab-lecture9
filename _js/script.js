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
    
    }

});




