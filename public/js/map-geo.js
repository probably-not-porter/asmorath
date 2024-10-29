var greenIconL = L.icon({
    iconUrl: 'icons/icon-green.png',
    shadowUrl: 'icons/icon-shadow.png',
    iconSize:     [26, 44],
    shadowSize:   [42, 44],
    iconAnchor:   [13, 44],
    shadowAnchor:   [15,44]
});
var greenIconS = L.icon({
    iconUrl: 'icons/icon-green.png',
    shadowUrl: 'icons/icon-shadow.png',
    iconSize:     [16, 28],
    shadowSize:   [32, 28],
    iconAnchor:   [8, 28],
    shadowAnchor:   [12,28]
});

// ===================== geographical Markers =====================
export function mapGeo() {
    // Crater
    var e1 = L.marker([37.86, 65.28], {icon: greenIconS}).bindPopup(
        `<h2>Dasmor Crater</h2>
        <p>The crator is the result of a massive meteor that hit the planet 50-60 million years ago. Possibly the root cause of techtonic/volcanic activity in Panasmor, and the creation of the Dasmor Isles.</p>
        `
    );

    // Lake
    var e2 = L.marker([44.31, 46.82], {icon: greenIconS}).bindPopup(
        `<h2>Lake of Mists</h2>
        <p>The lake is extremely deep, reaching to far below sea level. It was formed billions of years ago in the early stages of the planet, when the continents formed, and long before they split. The lake itself was formed in the caldera of the ancient supervolcano that formed the continents.</p>
        `
    );

    // Western Mantle Plume
    var e3 = L.marker([29.93, 17.44], {icon: greenIconS}).bindPopup(
        `<h2>Western Mantle Plume</h2>
        <p>This island chain is some of the newest geology on the planet, the result of the main Panasmor plate slowly breaking and colliding with its neighbors.</p>
        <a href='https://en.wikipedia.org/wiki/Mantle_plume'>Mantle Plume info</a>
        `
    );

    var geographical = L.layerGroup([e1,e2,e3]);

    return geographical
}




