function initMap() {
  var options = {
    zoom: 8,
    center: {lat: 29.3909, lng: 76.9635}
  }

  var map = new google.maps.Map(document.getElementById('map'), options);

  google.maps.event.addListener(map, 'click', function(event) {
    addMarker({coords: event.latLng});
  });

  var markers = [
    {
      coords: {lat: 29.3909, lng: 76.9635},
      iconImage :'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h1>panipant</h1>'
    },
    {
      coords: {lat: 29.3909, lng: 76.9635}
    }
  ];

  for(var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    if(props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if(props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content : props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker)
      });
    }

  }

}