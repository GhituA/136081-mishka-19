function initMap() {
  var mishka = {
    lat: 59.938568,
    lng: 30.322747
  };
  var map = new google.maps.Map(document.querySelector(".js-map"), {
    zoom: 17,
    center: mishka,
    disableDefaultUI: true
  });
  var image = "../img/icon-map-pin.svg";
  var marker = new google.maps.Marker({
    position: mishka,
    map: map,
    icon: image
  });
}
