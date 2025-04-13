var blueIconL = L.icon({
    iconUrl: "static/img/icons/icon-blue.png",
    shadowUrl: "static/img/icons/icon-shadow.png",
    iconSize: [26, 44],
    shadowSize: [42, 44],
    iconAnchor: [13, 44],
    shadowAnchor: [15, 44],
});
var blueIconS = L.icon({
    iconUrl: "static/img/icons/icon-blue.png",
    shadowUrl: "static/img/icons/icon-shadow.png",
    iconSize: [16, 28],
    shadowSize: [32, 28],
    iconAnchor: [8, 28],
    shadowAnchor: [12, 28],
});

// ================= cities ==========================
export function mapCities() {
    // Quinterra // 1st Prefecture:
    var quinterra_1 = L.marker([45.25, 55.56], { icon: blueIconL }).bindPopup(
        `<h2>Main St Trade District</h2>
        <p1>Capital of Quinterra</p1><br>
        <p1>Seat of 1st Prefecture</p1>`,
    );
    var quinterra_2 = L.marker([43.25, 57.45], { icon: blueIconS }).bindPopup(
        `<h2>Brothstone</h2>
        <p1>Quinterra</p1>`,
    );
    var quinterra_3 = L.marker([43.89, 55.38], { icon: blueIconS }).bindPopup(
        `<h2>Mead’s Marsh</h2>
        <p1>Quinterra</p1>`,
    );
    var quinterra_6 = L.marker([44.34, 59.91], { icon: blueIconS }).bindPopup(
        `<h2>Tarrien</h2>
        <p1>Quinterra</p1>`,
    );

    // 2nd Prefecture
    var quinterra_4 = L.marker([42.3, 52.7], { icon: blueIconS }).bindPopup(
        `<h2>Kinsey’s Distillery</h2>
        <p1>(Company Town)</p1><br>
        <p1>Quinterra</p1>`,
    );
    var quinterra_5 = L.marker([37.97, 51.16], { icon: blueIconS }).bindPopup(
        `<h2>Sheridan Farming District</h2>
        <p1>Quinterra</p1>`,
    );

    // Kanasmora
    var kanasmora_1 = L.marker([78.63, 28.67], { icon: blueIconS }).bindPopup(
        `<h2>Sarethheim</h2>
        <p1>Kanasmora</p1>`,
    );
    var kanasmora_2 = L.marker([77.67, 36.86], { icon: blueIconS }).bindPopup(
        `<h2>Samilheim</h2>
        <p1>Kanasmora</p1>`,
    );
    var kanasmora_3 = L.marker([76.36, 48.7], { icon: blueIconS }).bindPopup(
        `<h2>Stilheim</h2>
        <p1>Kanasmora</p1>`,
    );
    var kanasmora_4 = L.marker([75.13, 56.25], { icon: blueIconS }).bindPopup(
        `<h2>Spalfheim</h2>
        <p1>Kanasmora</p1>`,
    );
    var kanasmora_5 = L.marker([77.03, 62.76], { icon: blueIconS }).bindPopup(
        `<h2>Shendheim</h2>
        <p1>Kanasmora</p1>`,
    );
    var kanasmora_6 = L.marker([79.16, 66.67], { icon: blueIconS }).bindPopup(
        `<h2>Smerheim</h2>
        <p1>Kanasmora</p1>`,
    );
    var kanasmora_7 = L.marker([72.75, 68.2], { icon: blueIconS }).bindPopup(
        `<h2>Skerlheim </h2>
        <p1>Kanasmora</p1>`,
    );

    // orthomena
    var orthomena_1 = L.marker([64.75, 55.97], { icon: blueIconS }).bindPopup(
        `<h2>Torel</h2>
        <p1>Orthomena</p1>`,
    );
    var orthomena_2 = L.marker([57.08, 57.48], { icon: blueIconS }).bindPopup(
        `<h2>Tethani</h2>
        <p1>Orthomena</p1>`,
    );
    var orthomena_3 = L.marker([63.84, 54.72], { icon: blueIconL }).bindPopup(
        `<h2>Kart Hek</h2>
        <p1>Capital of Orthomena</p1>`,
    );
    var orthomena_4 = L.marker([58.01, 50.82], { icon: blueIconS }).bindPopup(
        `<h2>Catharn</h2>
        <p1>Orthomena</p1>`,
    );
    var orthomena_5 = L.marker([70.77, 59.84], { icon: blueIconS }).bindPopup(
        `<h2>Skeirolt</h2>
        <p1>Orthomena</p1>`,
    );
    var orthomena_6 = L.marker([66.42, 59.84], { icon: blueIconS }).bindPopup(
        `<h2>Samerli</h2>
        <p1>Orthomena</p1>`,
    );
    var orthomena_7 = L.marker([56.34, 54.58], { icon: blueIconS }).bindPopup(
        `<h2>Chanakia</h2>
        <p1>Orthomena</p1>`,
    );
    var orthomena_8 = L.marker([65.14, 52.98], { icon: blueIconS }).bindPopup(
        `<h2>Sharak</h2>
        <p1>Orthomena</p1>`,
    );
    var orthomena_9 = L.marker([61.86, 57.5], { icon: blueIconS }).bindPopup(
        `<h2>Sphamilia</h2>
        <p1>Orthomena</p1>`,
    );

    //demacia
    var demacia_1 = L.marker([45.81, 43.28], { icon: blueIconS }).bindPopup(
        `<h2>Saraleth Commune</h2>
        <p1>Demacia</p1>`,
    );
    var demacia_2 = L.marker([40.21, 39.73], { icon: blueIconS }).bindPopup(
        `<h2>Bylantia Intentional Community</h2>
        <p1>Demacia</p1>`,
    );
    var demacia_3 = L.marker([46.46, 36.96], { icon: blueIconS }).bindPopup(
        `<h2>Shirazi Consortium</h2>
        <p1>Demacia</p1>`,
    );
    var demacia_4 = L.marker([47.5, 44.06], { icon: blueIconS }).bindPopup(
        `<h2>Quirria Commune</h2>
        <p1>Demacia</p1>`,
    );

    //lucacia
    var lucacia_1 = L.marker([44.31, 49.53], { icon: blueIconL }).bindPopup(
        `<h2>District A</h2>
        <p1>Capital of Lucacia</p1>`,
    );
    var lucacia_2 = L.marker([40.58, 45.82], { icon: blueIconS }).bindPopup(
        `<h2>District B</h2>
        <p1>Lucacia</p1>`,
    );
    var lucacia_3 = L.marker([46.66, 50.86], { icon: blueIconS }).bindPopup(
        `<h2>District C</h2>
        <p1>Lucacia</p1>`,
    );

    // Vespusa
    var vespusa_1 = L.marker([48.17, 60.7], { icon: blueIconL }).bindPopup(
        `<h2>Karghold</h2>
        <p1>Capital of Vespusa</p1>`,
    );
    var vespusa_2 = L.marker([45.17, 52.34], { icon: blueIconS }).bindPopup(
        `<h2>Groffton</h2>
        <p1>Vespusa</p1>`,
    );
    var vespusa_3 = L.marker([45.77, 57.47], { icon: blueIconS }).bindPopup(
        `<h2>Rek’tom</h2>
        <p1>Vespusa</p1>`,
    );
    var vespusa_4 = L.marker([53.41, 67.59], { icon: blueIconS }).bindPopup(
        `<h2>Shakohn’s Point</h2>
        <p1>Vespusa</p1>`,
    );
    var vespusa_5 = L.marker([46.98, 66.17], { icon: blueIconS }).bindPopup(
        `<h2>Shal’tom</h2>
        <p1>Vespusa</p1>`,
    );
    var vespusa_6 = L.marker([51.81, 58.89], { icon: blueIconS }).bindPopup(
        `<h2>Skrel’nek</h2>
        <p1>Vespusa</p1>`,
    );
    var vespusa_7 = L.marker([52.03, 54.41], { icon: blueIconS }).bindPopup(
        `<h2>Shok’tas</h2>
        <p1>Vespusa</p1>`,
    );

    // Principium
    var principium_1 = L.marker([37.73, 37.19], { icon: blueIconS }).bindPopup(
        `<h2>Skifton</h2>
        <p1>Principium</p1>`,
    );
    var principium_2 = L.marker([34.76, 37.28], { icon: blueIconS }).bindPopup(
        `<h2>Samithberg</h2>
        <p1>Principium</p1>`,
    );
    var principium_3 = L.marker([32.73, 38.01], { icon: blueIconS }).bindPopup(
        `<h2>Jarlton</h2>
        <p1>Principium</p1>`,
    );
    var principium_4 = L.marker([38.42, 46.5], { icon: blueIconS }).bindPopup(
        `<h2>Northmanshire</h2>
        <p1>Principium</p1>`,
    );
    var principium_5 = L.marker([35.83, 48.56], { icon: blueIconL }).bindPopup(
        `<h2>Phirrelington</h2>
        <p1>Capital of Principium</p1>`,
    );
    var principium_6 = L.marker([35.7, 41.86], { icon: blueIconS }).bindPopup(
        `<h2>Joffton</h2>
        <p1>Principium</p1>`,
    );

    // Dasmor
    //Scynian Straight (points along it): POINT(Lat: 30.59, Long: 59.75), POINT(Lat: 33.78, Long: 59.47), POINT(Lat: 38.22, Long: 61.19), POINT(Lat: 41.53, Long: 62.91), POINT(Lat: 44.75, Long: 67.41), POINT(Lat: 47.44, Long: 69.03)

    // Damascyrna
    var damascyrna_1 = L.marker([31, 58.25], { icon: blueIconS }).bindPopup(
        `<h2>Kraise</h2>
        <p1>Damascyrna</p1>`,
    );
    var damascyrna_2 = L.marker([35.36, 58.06], { icon: blueIconL }).bindPopup(
        `<h2>Scryneland</h2>
        <p1>Capital of Damascyrna</p1>`,
    );
    var damascyrna_3 = L.marker([36.14, 61.22], { icon: blueIconS }).bindPopup(
        `<h2>Terovia</h2>
        <p1>Damascyrna</p1>`,
    );
    var damascyrna_4 = L.marker([33.38, 64.09], { icon: blueIconS }).bindPopup(
        `<h2>K’naktu</h2>
        <p1>Damascyrna</p1>`,
    );
    var damascyrna_5 = L.marker([29.73, 61.55], { icon: blueIconS }).bindPopup(
        `<h2>Sevarrro</h2>
        <p1>Damascyrna</p1>`,
    );

    // Scypia
    var scypia_1 = L.marker([42.79, 66.02], { icon: blueIconS }).bindPopup(
        `<h2>Ísdilmeall</h2>
        <p1>Scypia</p1>`,
    );
    var scypia_2 = L.marker([39.96, 69.25], { icon: blueIconS }).bindPopup(
        `<h2>Kannaktoh</h2>
        <p1>Scypia</p1>`,
    );
    var scypia_3 = L.marker([28.2, 65.06], { icon: blueIconS }).bindPopup(
        `<h2>Tek’ma-te</h2>
        <p1>Scypia</p1>`,
    );
    var scypia_4 = L.marker([33.23, 68.14], { icon: blueIconS }).bindPopup(
        `<h2>Ska’a-ti</h2>
        <p1>Scypia</p1>`,
    );
    var scypia_5 = L.marker([39.34, 71.81], { icon: blueIconS }).bindPopup(
        `<h2>Shin Roma</h2>
        <p1>Scypia</p1>`,
    );
    var scypia_6 = L.marker([35.8, 70.06], { icon: blueIconL }).bindPopup(
        `<h2>New Skireneland</h2>
        <p1>Capital of Scypia</p1>`,
    );
    var scypia_7 = L.marker([28.61, 76.92], { icon: blueIconS }).bindPopup(
        `<h2>Serrato</h2>
        <p1>Scypia</p1>`,
    );

    var cities = L.layerGroup([
        quinterra_1,
        quinterra_2,
        quinterra_3,
        quinterra_4,
        quinterra_5,
        quinterra_6,
        kanasmora_1,
        kanasmora_2,
        kanasmora_3,
        kanasmora_4,
        kanasmora_5,
        kanasmora_6,
        kanasmora_7,
        orthomena_1,
        orthomena_2,
        orthomena_3,
        orthomena_4,
        orthomena_5,
        orthomena_6,
        orthomena_7,
        orthomena_8,
        orthomena_9,
        demacia_1,
        demacia_2,
        demacia_3,
        demacia_4,
        lucacia_1,
        lucacia_2,
        lucacia_3,
        vespusa_1,
        vespusa_2,
        vespusa_3,
        vespusa_4,
        vespusa_5,
        vespusa_6,
        vespusa_7,
        principium_1,
        principium_2,
        principium_3,
        principium_4,
        principium_5,
        principium_6,
        damascyrna_1,
        damascyrna_2,
        damascyrna_3,
        damascyrna_4,
        damascyrna_5,
        scypia_1,
        scypia_2,
        scypia_3,
        scypia_4,
        scypia_5,
        scypia_6,
        scypia_7,
    ]);

    return cities;
}
