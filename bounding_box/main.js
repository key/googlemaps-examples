var map;
var gmapsDefaultZoom = 8;

function showBounds() {
    var latlng = map.getBounds();
    if (latlng == null) {
        return;
    }
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
        zoom: gmapsDefaultZoom
    });

    // show bounds when scroll stopped. (`dragend` event is fired at unclick)
    map.addListener('idle', showBounds);

    // show bounds when updating window size or changed zoom level.
    map.addListener('zoom_changed', showBounds);
    map.addListener('resize', showBounds);

    // show bounds when resizing window
    google.maps.event.addDomListener(window, 'resize', function() {
        google.maps.event.trigger(map, 'resize');
    });
}

