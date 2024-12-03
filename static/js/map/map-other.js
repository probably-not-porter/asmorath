var redIconL = L.icon({
    iconUrl: '/static/img/icons/icon-red.png',
    shadowUrl: '/static/img/icons/icon-shadow.png',
    iconSize:     [26, 44],
    shadowSize:   [42, 44],
    iconAnchor:   [13, 44],
    shadowAnchor:   [15,44]
});
var redIconS = L.icon({
    iconUrl: '/static/img/icons/icon-red.png',
    shadowUrl: '/static/img/icons/icon-shadow.png',
    iconSize:     [16, 28],
    shadowSize:   [32, 28],
    iconAnchor:   [8, 28],
    shadowAnchor:   [12,28]
});

// ================= other ==========================
export function mapOther() {
    var ruins_1 = L.marker([39.69, 56.34], {icon: redIconS}).bindPopup(
        `<h2>Klithian Tower Ruins</h2>`
    );

    var mine_1 = L.marker([36.52, 57.05], {icon: redIconS}).bindPopup(
        `<h2>State Owned Mine #1</h2>`
    );
    var mine_2 = L.marker([38.14, 58.66], {icon: redIconS}).bindPopup(
        `<h2>State Owned Mine #2</h2>`
    );
    var mine_3 = L.marker([41.3, 60.03], {icon: redIconS}).bindPopup(
        `<h2>State Owned Mine #3</h2>`
    );

    var other = L.layerGroup([
        ruins_1,
        mine_1, mine_2, mine_3
    ]);

    return other
}