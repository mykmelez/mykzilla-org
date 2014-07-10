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

function goTo(url) {
  window.location = url;
}

function openInNewWindow(url) {
    window.open(url);
}

function openInNewBlankWindow(url) {
    window.open(url, "_blank");
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

function install(manifestName) {
  var request = navigator.mozApps.install('http://mykzilla.org/app/' + manifestName, ['receipt']);
  document.getElementById("throbber").style.visibility = "visible";
  request.onsuccess = function() {
    document.getElementById("throbber").style.visibility = "hidden";
    var message = "success!\n\n" + [(p + "=" + this.result[p]) for (p in this.result)].join("\n");
    console.log(message);
    alert(message);
  }
  request.onerror = function() {
    document.getElementById("throbber").style.visibility = "hidden";
    var message = "failure! " + this.error.name;
    console.log(message);
    alert(message);
  }
}
