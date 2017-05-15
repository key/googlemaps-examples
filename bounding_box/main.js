var map;
var gmapsDefaultZoom = 8;

function showBounds() {
    var latlng = map.getBounds();
    var northeast = latlng.getNorthEast();
    var southwest = latlng.getSouthWest();

    var lefttop = document.getElementsByClassName('gmaps_bound_lefttop');
    var righttop = document.getElementsByClassName('gmaps_bound_righttop');
    var leftbottom = document.getElementsByClassName('gmaps_bound_leftbottom');
    var rightbottom = document.getElementsByClassName('gmaps_bound_rightbottom');
    lefttop[0].innerText = new google.maps.LatLng(northeast.lat(), southwest.lng());
    righttop[0].innerText = new google.maps.LatLng(northeast.lat(), northeast.lng());
    leftbottom[0].innerText = new google.maps.LatLng(southwest.lat(), southwest.lng());
    rightbottom[0].innerText = new google.maps.LatLng(southwest.lat(), northeast.lng());
}

// call when loaded goooglemaps javascript api
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 35.685175, lng: 139.7528},
        scrollwheel: false,
        zoom: gmapsDefaultZoom,
        bounds_changed: showBounds,
        zoom_changed: showBounds,
        resize: showBounds
    });
}

