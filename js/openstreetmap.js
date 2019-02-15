// position we will use later
var lat = 12.9424842;
var lon = 80.1412857;
// initialize map
map = L.map('mapDiv').setView([lat, lon], 13);
// set map tiles source
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);
// add marker to the map
marker = L.marker([lat, lon]).addTo(map);
// add popup to the marker
marker.bindPopup("<center><b>CROSTA</b><br />Rajendra Prasad Rd<br />Hasthinapuram</center>").openPopup();
