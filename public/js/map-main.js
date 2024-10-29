// ====================== MAIN =======================
export function mapMain(bounds) {
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: 3,
        maxZoom: 10
    });
    // COORD TRACKING
    map.addEventListener('mousemove', function(ev) {
        let lat = Math.round(ev.latlng.lat * 100) / 100;
        let lng = Math.round(ev.latlng.lng * 100) / 100;
        document.getElementById("coord").innerText = `Lat: ${lat}, Long: ${lng}`;
    });
    map.addEventListener('click', function(ev) {
        let lat = Math.round(ev.latlng.lat * 100) / 100;
        let lng = Math.round(ev.latlng.lng * 100) / 100;
        copyToClipboard(`POINT(Lat: ${lat}, Long: ${lng})`);
    });
    map.on('zoomend', function (e) {
        let zoom = map.getZoom();
        console.log(zoom);
        document.getElementById("zoom").innerText = `Zoom: ${zoom}`;
    });

    return map
}