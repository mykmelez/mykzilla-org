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
    alert('App installed successfully!');
  }
  request.onerror = function() {
    document.getElementById("throbber").style.visibility = "hidden";
    alert('Error installing app: ' + this.error.name);
  }
}

function launch() {
  var request = navigator.mozApps.checkInstalled('http://mykzilla.org/app/manifest.webapp');
  request.onsuccess = function() {
    if (request.result) {
      request.result.launch();
    } else {
      alert('App is not installed.');
    }
  };
  request.onerror = function() {
    alert('Error launching app: ' + this.error.name);
  };
}

function useDeviceStorage() {
  var sdcard = navigator.getDeviceStorage("sdcard");
  var file   = new Blob(["This is a text file."], {type: "text/plain"});

  var request = sdcard.addNamed(file, "my-file.txt");

  request.onsuccess = function () {
    var name = this.result;
    console.log('File "' + name + '" successfully wrote on the sdcard storage area');
  }

  // An error typically occur if a file with the same name already exist
  request.onerror = function () {
    console.warn('Unable to write the file: ' + this.error);
  }
}
