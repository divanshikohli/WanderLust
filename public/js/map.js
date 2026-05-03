const mapDiv = document.getElementById("map");

const listingTitle = JSON.parse(mapDiv.dataset.title);
const coordinates = JSON.parse(mapDiv.dataset.coordinates);

const listingMap = L.map("map").setView(
    [coordinates[1], coordinates[0]],
    10
);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19
    }
).addTo(listingMap);

const homeIcon = L.divIcon({
    html: `
        <div style="
            background:#dc3545;
            width:38px;
            height:38px;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            font-size:18px;
            box-shadow:0 4px 10px rgba(0,0,0,0.25);
            border:2px solid white;
        ">
            <i class="fa-solid fa-house"></i>
        </div>
    `,
    className: "",
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
});

L.marker(
    [coordinates[1], coordinates[0]],
    { icon: homeIcon }
)
    .addTo(listingMap)
    .bindPopup((`<div style="text-align:center;">
        <b>${listingTitle}</b><br>
        Ready for your stay </div>`))
    .openPopup();