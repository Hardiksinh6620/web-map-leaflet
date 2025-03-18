function addLegend(map){const legend=L.control({position:"bottomright"});legend.onAdd=()=>{const d=L.DomUtil.create("div","legend");d.innerHTML='<i style="background:#1f77b4;width:14px;height:14px;display:inline-block;margin-right:6px"></i>Sample Points';return d;};legend.addTo(map);}
window.addLegend=addLegend;
