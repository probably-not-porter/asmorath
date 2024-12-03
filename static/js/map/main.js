import {mapMain} from './map-main.js';
import {mapGrid} from './map-grid.js';
import {mapOther} from './map-other.js';
import {mapCities} from './map-cities.js';
import {mapGeo} from './map-geo.js';

// MAP SETTINGS
var bounds = [[0,0], [100,100]]; // coord

window.onload = function () {
    var map = mapMain(bounds); // MAIN MAP OBJECT
    map.fitBounds(bounds);


    

    // ===== Image Layers =====
    var basemap = L.imageOverlay('/static/img/layers/Asmorath.png', bounds);
    var political = L.imageOverlay('/static/img/layers/political.png', bounds); 
    var volcanic = L.imageOverlay('/static/img/layers/volcanic.png', bounds);
    var terrain = L.imageOverlay('/static/img/layers/terrain.png', bounds);

    // ===== Grid Layer =====
    var grid = mapGrid();

    // ===== Pin Layers =====
    var cities = mapCities();
    var other = mapOther();
    var geographical = mapGeo();

    // ===== Image Map Group =====
    map.addLayer(terrain)
    var imgMaps = {
        "Political Map": political,
        "Biome Map": terrain
    };

    // ===== Feature Map Group =====
    var featureMaps = {
        "Volcanic Activity": volcanic,
        "Grid Lines": grid,
        "Geographical Features": geographical,
        "Cities and Towns": cities,
        "Ruins and Other Locations": other
    };

    L.control.layers(imgMaps,featureMaps).addTo(map);



    // ===== CREATE FINAL MAP =====
    $(document).ready(function(){
        jQuery('img').each(function(){
            jQuery(this).attr('src',jQuery(this).attr('src')+ '?' + (new Date()).getTime());
        });
    });
}