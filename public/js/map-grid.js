export function mapGrid() {
    var long1 = L.polyline([[10, 0], [10, 100]], {color: 'black', weight: '0.3'}),
    long2 = L.polyline([[20, 0], [20, 100]], {color: 'black', weight: '0.3'}),
    long3 = L.polyline([[30, 0], [30, 100]], {color: 'black', weight: '0.3'}),
    long4 = L.polyline([[40, 0], [40, 100]], {color: 'black', weight: '0.3'}),
    long5 = L.polyline([[50, 0], [50, 100]], {color: 'black', weight: '1.0'}),
    long6 = L.polyline([[60, 0], [60, 100]], {color: 'black', weight: '0.3'}),
    long7 = L.polyline([[70, 0], [70, 100]], {color: 'black', weight: '0.3'}),
    long8 = L.polyline([[80, 0], [80, 100]], {color: 'black', weight: '0.3'}),
    long9 = L.polyline([[90, 0], [90, 100]], {color: 'black', weight: '0.3'})


    var lat1 = L.polyline([[0, 10], [100, 10]], {color: 'black', weight: '0.3'}),
    lat2 = L.polyline([[0, 20], [100, 20]], {color: 'black', weight: '0.3'}),
    lat3 = L.polyline([[0, 30], [100, 30]], {color: 'black', weight: '0.3'}),
    lat4 = L.polyline([[0, 40], [100, 40]], {color: 'black', weight: '0.3'}),
    lat5 = L.polyline([[0, 50], [100, 50]], {color: 'black', weight: '1.0'}),
    lat6 = L.polyline([[0, 60], [100, 60]], {color: 'black', weight: '0.3'}),
    lat7 = L.polyline([[0, 70], [100, 70]], {color: 'black', weight: '0.3'}),
    lat8 = L.polyline([[0, 80], [100, 80]], {color: 'black', weight: '0.3'}),
    lat9 = L.polyline([[0, 90], [100, 90]], {color: 'black', weight: '0.3'})

    var map_grid = L.layerGroup([
        long1, long2, long3, long4, long5, long6, long7, long8, long9,
        lat1, lat2, lat3, lat4, lat5, lat6, lat7, lat8, lat9
    ]);

    return map_grid
}
  
  
