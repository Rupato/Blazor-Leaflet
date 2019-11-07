var map = L.map('map', {
    contextmenu: true,
    contextmenuWidth: 120,
    contextmenuItems: [{
        text: 'Show coordinates',
        callback: showCoordinates
    }, {
        text: 'Center map here',
        callback: centerMap
    }, '-', {
        text: 'Zoom in',
        icon: 'images/zoom-in.png',
        callback: zoomIn
    }, {
        text: 'Zoom out',
        icon: 'images/zoom-out.png',
        callback: zoomOut
    },
    {
        text: 'green',
        icon: 'images/zoom-out.png',
        callback: greenpolygon
    },
    {
        text: 'blue',
        icon: 'images/zoom-out.png',
        callback: bluepolygon
    }
    ]
}
    ).setView([51.5, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href=" ">OpenStreetMap</a> contributors',
        maxZoom: 18,
        id: 'mapbox.streets'
    }).addTo(map);

    var info = document.getElementById('info');
    var content = '<h1>blue</h1><div class="tabs">' +

        '<div class="tab" id="tab-1">' +
        '<div class="content">' +

        '<iframe height="125px" width="200px" src=" " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '</div>' +
        '</div>' +

        '<div class="tab" id="tab-2">' +
        '<div class="content">' +
        '<b>Tab 2 content</b>' +
        '</div>' +
        '</div>' +

        '<div class="tab" id="tab-3">' +
        '<div class="content">' +
        '<b>Tab 3 content</b>' +
        '</div>' +
        '</div>' +

        '</div>';

    var content1 = '<h1>green</h1><div class="tabs">' +
        '<div class="tabs">' +

        '<iframe width="200px" height="150px" src=" " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        '</div>' +
        '</div>' +

        '<div class="tab" id="tab-2">' +
        '<div class="content">' +
        '<b>Tab 2 content</b>' +
        '</div>' +
        '</div>' +

        '<div class="tab" id="tab-3">' +
        '<div class="content">' +
        '<b>Tab 3 content</b>' +
        '</div>' +
        '</div>' +


        '</div>';

    var polygon1 = L.circle([51.508, -0.11], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map).bindPopup(content);

    var polygon4 = L.marker([51.508, -0.11], 500, {
        contextmenu: true,
        contextmenuItems: [{
            text: 'Marker item',
            index: 0
        }, {
            separator: true,
            index: 1
        }]
    }).addTo(map);



    var polygon2 = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map).bindPopup(content);

    var polygon3 = L.polygon([
        [51.500, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
    ]).addTo(map).bindPopup(content1);


    function showCoordinates(e) {
        alert(e.latlng);
    }

    function centerMap(e) {
        map.panTo(e.latlng);
    }

    function zoomIn(e) {
        map.zoomIn();
    }

    function zoomOut(e) {
        map.zoomOut();
    }

    function greenpolygon(e) {
        polygon2.bringToBack();
        polygon2.setStyle({
            weight: 1
        });
        polygon3.setStyle({
            weight: 3
        });
        polygon2.doubleClickZoom.disable();
    }

    function bluepolygon(e) {
        polygon3.bringToBack();
        polygon3.setStyle({
            weight: 1
        });
        polygon2.setStyle({
            weight: 3
        });
        polygon3.bringToBack();
        polygon3.doubleClickZoom.disable();
    }



    polygon2.on('dblclick', function () {
        //console.log('clicked on 2nd polygon');
        //console.log(polygon2._leaflet_id);
        polygon2.bringToBack();
        polygon2.setStyle({
            weight: 1
        });
        polygon3.setStyle({
            weight: 3
        });
        polygon2.doubleClickZoom.disable();
    });

    polygon3.on('dblclick', function () {
        //console.log('clicked on 3rd polygon');
        //console.log(polygon3._leaflet_id);
        polygon3.setStyle({
            weight: 1
        });
        polygon2.setStyle({
            weight: 3
        });
        polygon3.bringToBack();
        polygon3.doubleClickZoom.disable();

    });


    polygon3.setStyle({
        fillColor: 'green',
        color: 'green',
        zindex: 1,
        weight: 2
    });
    polygon2.setStyle({
        zindex: 1,
        weight: 1
    });
    //var cities = L.layerGroup([polygon3],[polygon2]);


    //var mixed = {
    //"Cities": cities
    // OverlayMaps
    //};

    //L.control.layers(null, mixed).addTo(map);


