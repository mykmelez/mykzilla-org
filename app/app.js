function geolocate() {
  navigator.geolocation.getCurrentPosition(function(position) {
    alert("Your position is " + position.coords.latitude + " x " + position.coords.longitude + ".");
  });
}
