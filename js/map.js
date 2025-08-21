const map = L.map('map').setView([52.52, 13.405], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {attribution:'&copy; OpenStreetMap', maxZoom:19}).addTo(map);

fetch('data/points.geojson').then(r=>{if(!r.ok) throw new Error(`HTTP ${r.status}`); return r.json();}).then(data=>{
  const layer = L.geoJSON(data,{
    onEachFeature:(f,l)=>l.bindPopup(`<b>${f.properties.name}</b>`),
    pointToLayer:(f,ll)=>L.circleMarker(ll,
      {radius:8,color:'#1f77b4',fillOpacity:.7})
  }).addTo(map);
  map.fitBounds(layer.getBounds(),{padding:[30,30]});
}).catch(error=>{ console.error(error); alert("Map data could not be loaded."); });

const legend = L.control({position:'bottomright'});
legend.onAdd = () => {
  const d = L.DomUtil.create('div','legend');
  d.innerHTML = '<i style="background:#1f77b4"></i>Sample Points';
  return d;
};
legend.addTo(map);
