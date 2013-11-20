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

function goTo(url, openInNewWindow) {
  if (openInNewWindow) {
    window.open(url);
  }
  else {
    window.location = url;
  }
}

function getMedia() {
  navigator.getMedia = navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia;

  navigator.getMedia (
    {
      video: true,
      audio: true
    },

    function(localMediaStream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(localMediaStream);
      video.onloadedmetadata = function(e) {
        video.play();
      };
    },

    function(error) {
      alert("Error getting user media: " + error);
    }
  );
}

function loop() {
  while (1) {
    //code
  }
}

function install() {
  var request = navigator.mozApps.install('http://mykzilla.org/app/manifest.webapp', { receipts: ['receipt'] });
  document.getElementById("throbber").style.visibility = "visible";
  request.onsuccess = function() {
    document.getElementById("throbber").style.visibility = "hidden";
    alert("success! " + JSON.stringify(this.result));
  }
  request.onerror = function() {
    document.getElementById("throbber").style.visibility = "hidden";
    alert("failure! " + this.error.name);
  }
}
