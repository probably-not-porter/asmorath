var blueIconL = L.icon({
    iconUrl: 'icons/icon-blue.png',
    shadowUrl: 'icons/icon-shadow.png',
    iconSize:     [26, 44],
    shadowSize:   [42, 44],
    iconAnchor:   [13, 44],
    shadowAnchor:   [15,44]
});
var blueIconS = L.icon({
    iconUrl: 'icons/icon-blue.png',
    shadowUrl: 'icons/icon-shadow.png',
    iconSize:     [16, 28],
    shadowSize:   [32, 28],
    iconAnchor:   [8, 28],
    shadowAnchor:   [12,28]
});

// ================= cities ==========================
export function mapCities() {
    // Quinterra // 1st Prefecture:
    var quinterra_1 = L.marker([40.72, 53.726], {icon: blueIconL}).bindPopup(
        `<h2>Main St Trade District</h2>
        <p1>Capital of Quinterra, and seat of 1st Prefecture</p1>`
    );
    var quinterra_2 = L.marker([39.39, 55.84], {icon: blueIconS}).bindPopup(
        `<h2>Brothstone</h2>`
    );
    var quinterra_3 = L.marker([38.84, 51.69], {icon: blueIconS}).bindPopup(
        `<h2>Mead’s Marsh</h2>`
    );
    var quinterra_6 = L.marker([39.23, 54.06], {icon: blueIconS}).bindPopup(
        `<h2>Tarrien</h2>`
    );

    // 2nd Prefecture
    var quinterra_4 = L.marker([40.88, 58.09], {icon: blueIconS}).bindPopup(
        `<h2>Kinsey’s Distillery (Company Town)</h2>`
    );
    var quinterra_5 = L.marker([35.7, 51.59], {icon: blueIconS}).bindPopup(
        `<h2>Sheridan Farming District</h2>`
    );



    // Kanasmora
    var kanasmora_1 = L.marker([77.75, 29.19], {icon: blueIconS}).bindPopup(
        `<h2>Sarethheim</h2>`
    );
    var kanasmora_2 = L.marker([76.97, 37.56], {icon: blueIconS}).bindPopup(
        `<h2>Samilheim</h2>`
    );
    var kanasmora_3 = L.marker([75.78, 48.97], {icon: blueIconS}).bindPopup(
        `<h2>Stilheim</h2>`
    );
    var kanasmora_4 = L.marker([74.47, 56.28], {icon: blueIconS}).bindPopup(
        `<h2>Spalfheim</h2>`
    );
    var kanasmora_5 = L.marker([76.06, 63.13], {icon: blueIconS}).bindPopup(
        `<h2>Shendheim</h2>`
    );
    var kanasmora_6 = L.marker([78.31, 66.75], {icon: blueIconS}).bindPopup(
        `<h2>Smerheim</h2>`
    );
    var kanasmora_7 = L.marker([72.06, 68.69], {icon: blueIconS}).bindPopup(
        `<h2>Skerlheim </h2>`
    );

    // orthomena
    var orthomena_1 = L.marker([64.13, 56], {icon: blueIconS}).bindPopup(
        `<h2>Torel</h2>`
    );
    var orthomena_2 = L.marker([57.08, 57.48], {icon: blueIconS}).bindPopup(
        `<h2>Tethani</h2>`
    );
    var orthomena_3 = L.marker([63.05, 54.41], {icon: blueIconL}).bindPopup(
        `<h2>Kart Hek</h2>
        <p1>Capital of Orthomena</p1>`
    );
    var orthomena_4 = L.marker([57.52, 51.33], {icon: blueIconS}).bindPopup(
        `<h2>Catharn</h2>`
    );
    var orthomena_5 = L.marker([70.25, 60.34], {icon: blueIconS}).bindPopup(
        `<h2>Skeirolt</h2>`
    );
    var orthomena_6 = L.marker([65.61, 60.38], {icon: blueIconS}).bindPopup(
        `<h2>Samerli</h2>`
    );
    var orthomena_7 = L.marker([56, 54.86], {icon: blueIconS}).bindPopup(
        `<h2>Chanakia</h2>`
    );
    var orthomena_8 = L.marker([65.11, 53.3], {icon: blueIconS}).bindPopup(
        `<h2>Sharak</h2>`
    );
    var orthomena_9 = L.marker([61.39, 57.86], {icon: blueIconS}).bindPopup(
        `<h2>Sphamilia</h2>`
    );

    //demacia
    var demacia_1 = L.marker([45.3, 43.81], {icon: blueIconS}).bindPopup(
        `<h2>Saraleth Commune</h2>`
    );
    var demacia_2 = L.marker([39.45, 40.33], {icon: blueIconS}).bindPopup(
        `<h2>Bylantia Intentional Community</h2>`
    );
    var demacia_3 = L.marker([46.91, 37.45], {icon: blueIconS}).bindPopup(
        `<h2>Shirazi Consortium</h2>`
    );
    var demacia_4 = L.marker([48.36, 44.84], {icon: blueIconS}).bindPopup(
        `<h2>Quirria Commune</h2>`
    );

    //lucacia
    var lucacia_1 = L.marker([42.58, 48.98], {icon: blueIconL}).bindPopup(
        `<h2>District A</h2>
        <p1>Capital of Lucacia</p1>`
    );
    var lucacia_2 = L.marker([40.58, 45.52], {icon: blueIconS}).bindPopup(
        `<h2>District B</h2>`
    );
    var lucacia_3 = L.marker([46.08, 50.02], {icon: blueIconS}).bindPopup(
        `<h2>District C</h2>`
    );

    // Vespusa
    var vespusa_1 = L.marker([45.13, 58.22], {icon: blueIconL}).bindPopup(
        `<h2>Karghold</h2>
        <p1>Capital of Vespusa</p1>`
    );
    var vespusa_2 = L.marker([44.84, 52.09], {icon: blueIconS}).bindPopup(
        `<h2>Groffton</h2>`
    );
    var vespusa_3 = L.marker([43.63, 56.19], {icon: blueIconS}).bindPopup(
        `<h2>Rek’tom</h2>`
    );
    var vespusa_4 = L.marker([52.81, 67.81], {icon: blueIconS}).bindPopup(
        `<h2>Shakohn’s Point</h2>`
    );
    var vespusa_5 = L.marker([46.5, 66.31], {icon: blueIconS}).bindPopup(
        `<h2>Shal’tom</h2>`
    );
    var vespusa_6 = L.marker([51.19, 59.13], {icon: blueIconS}).bindPopup(
        `<h2>Skrel’nek</h2>`
    );
    var vespusa_7 = L.marker([51.06, 53.53], {icon: blueIconS}).bindPopup(
        `<h2>Shok’tas</h2>`
    );

    // Principium
    var principium_1 = L.marker([37.89, 37.3], {icon: blueIconS}).bindPopup(
        `<h2>Skifton</h2>`
    );
    var principium_2 = L.marker([34.78, 37.61], {icon: blueIconS}).bindPopup(
        `<h2>Samithberg</h2>`
    );
    var principium_3 = L.marker([32.81, 38.08], {icon: blueIconS}).bindPopup(
        `<h2>Jarlton</h2>`
    );
    var principium_4 = L.marker([38.67, 46.89], {icon: blueIconS}).bindPopup(
        `<h2>Northmanshire</h2>`
    );
    var principium_5 = L.marker([33.45, 50.05], {icon: blueIconL}).bindPopup(
        `<h2>Phirrelington</h2>
        <p1>Capital of Principium</p1>`
    );
    var principium_6 = L.marker([35.5, 41.89], {icon: blueIconS}).bindPopup(
        `<h2>Joffton</h2>`
    );


    // Dasmor
    //Scynian Straight (points along it): POINT(Lat: 30.59, Long: 59.75), POINT(Lat: 33.78, Long: 59.47), POINT(Lat: 38.22, Long: 61.19), POINT(Lat: 41.53, Long: 62.91), POINT(Lat: 44.75, Long: 67.41), POINT(Lat: 47.44, Long: 69.03)
        

    // Damascyrna
    var damascyrna_1 = L.marker([31.09, 58.59], {icon: blueIconS}).bindPopup(
        `<h2>Kraise</h2>`
    );
    var damascyrna_2 = L.marker([35.25, 58.47], {icon: blueIconL}).bindPopup(
        `<h2>Scryneland</h2>
        <p1>Capital of Damascyrna</p1>`
    );
    var damascyrna_3 = L.marker([36, 61.81], {icon: blueIconS}).bindPopup(
        `<h2>Terovia</h2>`
    );
    var damascyrna_4 = L.marker([33.38, 64.59], {icon: blueIconS}).bindPopup(
        `<h2>K’naktu</h2>`
    );
    var damascyrna_5 = L.marker([30.31, 61.88], {icon: blueIconS}).bindPopup(
        `<h2>Sevarrro</h2>`
    );


    // Scypia
    var scypia_1 = L.marker([42.52, 66.24], {icon: blueIconS}).bindPopup(
        `<h2>Ísdilmeall</h2>`
    );
    var scypia_2 = L.marker([39.78, 69.78], {icon: blueIconS}).bindPopup(
        `<h2>Kannaktoh</h2>`
    );
    var scypia_3 = L.marker([29.66, 65.72], {icon: blueIconS}).bindPopup(
        `<h2>Tek’ma-te</h2>`
    );
    var scypia_4 = L.marker([33.22, 68.38], {icon: blueIconS}).bindPopup(
        `<h2>Ska’a-ti</h2>`
    );
    var scypia_5 = L.marker([38.94, 72], {icon: blueIconS}).bindPopup(
        `<h2>Shin Roma</h2>`
    );
    var scypia_6 = L.marker([34, 70.41], {icon: blueIconL}).bindPopup(
        `<h2>New Skireneland</h2>
        <p1>Capital of Scypia</p1>`
    );
    var scypia_7 = L.marker([28.94, 77.38], {icon: blueIconS}).bindPopup(
        `<h2>Serrato</h2>`
    );


    var cities = L.layerGroup([
        quinterra_1, quinterra_2, quinterra_3, quinterra_4, quinterra_5, quinterra_6,
        kanasmora_1, kanasmora_2, kanasmora_3, kanasmora_4, kanasmora_5, kanasmora_6, kanasmora_7,
        orthomena_1, orthomena_2, orthomena_3, orthomena_4, orthomena_5, orthomena_6, orthomena_7, orthomena_8, orthomena_9,
        demacia_1, demacia_2, demacia_3, demacia_4,
        lucacia_1, lucacia_2, lucacia_3,
        vespusa_1, vespusa_2, vespusa_3, vespusa_4, vespusa_5, vespusa_6, vespusa_7,
        principium_1, principium_2, principium_3, principium_4, principium_5, principium_6,
        damascyrna_1, damascyrna_2, damascyrna_3, damascyrna_4, damascyrna_5,
        scypia_1, scypia_2, scypia_3, scypia_4, scypia_5, scypia_6, scypia_7
    ]);

    return cities
}