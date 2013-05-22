function geolocate() {
  navigator.geolocation.watchPosition(function(position) {
    var text = document.createTextNode(position.coords.latitude + " x " + position.coords.longitude);
    var div = document.createElement("div");
    div.appendChild(text);
    document.body.appendChild(div);
  });
}

function screamScreen() {
  alert("screen: " + window.screen.width + "x" + window.screen.height);
}
