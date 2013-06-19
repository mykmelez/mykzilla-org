function geolocate() {
  navigator.geolocation.watchPosition(function(position) {
    var coords = position.coords.latitude + " x " + position.coords.longitude;
    console.log(coords);
    var text = document.createTextNode(coords);
    var div = document.createElement("div");
    div.appendChild(text);
    document.body.appendChild(div);
  });
}

function screamScreen() {
  var screen = window.screen.width + " x " + window.screen.height;
  console.log(screen);
  alert(screen);
}
