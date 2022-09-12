mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF2ZXhtaWtlIiwiYSI6ImNsNGZwMDd4ZTAxejAzZG04c3VzZmIxMnQifQ.6RQXOVRguEJoXWJMDUiFRA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 41], // starting position [lng, lat]
  zoom: 9, // starting zoom
  projection: "globe", // display the map as a 3D globe
});
map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});
