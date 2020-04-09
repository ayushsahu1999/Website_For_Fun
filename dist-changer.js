<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4A9x0LSscb8LCa48LY5FUCiM65RvtacA&library=drawing,places,geometry"
type="text/javascript"></script>

var map;
var starting = new google.maps.LatLng(26.471190, 80.289976);
var ending = new google.maps.LatLng(26.507192, 80.274133);
var mapOptions = {
    zoom: 14,
    center: starting
};
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

directionsDisplay.setMap(map);
        var request = {
            origin: starting,
            destination: ending,
            travelMode: 'DRIVING',
            provideRouteAlternatives: true
        };

i = 0

if (n > 15){
  while (i < directionResult.routes.length){
    if (n > 15){
      i++;
    }
    else{
      break;
    }
  }
}

if (i > directionResult.routes.length){
  i = i - 1;
}
