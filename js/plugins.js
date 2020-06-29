// <!-- Google Map js -->

function basicmap() {
// Basic options for a simple Google Map
// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,
    scrollwheel: false,
    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(26.675200, 85.166801), // New York
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
{
"featureType": "administrative",
"elementType": "labels.text",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "transit.station.rail",
"elementType": "all",
"stylers": [
    {
        "visibility": "simplified"
    },
    {
        "saturation": "-100"
    }
]
},
{
"featureType": "water",
"elementType": "all",
"stylers": [
    {
        "visibility": "on"
    }
]
}
]

};
// Get the HTML DOM element that will contain your map 
// We are using a div with id="map" seen below in the <body>
var mapElement = document.getElementById('contact-map');

// Create the Google Map using our element and options defined above
var map = new google.maps.Map(mapElement, mapOptions);

// Let's also add a marker while we're at it
var marker = new google.maps.Marker({
    position: new google.maps.LatLng(26.675200, 85.166801),
    map: map,
    title: 'Cryptox'
});
}
if ($('#contact-map').length != 0) {
google.maps.event.addDomListener(window, 'load', basicmap);
}

