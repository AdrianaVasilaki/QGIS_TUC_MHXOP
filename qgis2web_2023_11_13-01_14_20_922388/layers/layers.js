var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GeologyFortmationsgeological_formations_1 = new ol.format.GeoJSON();
var features_GeologyFortmationsgeological_formations_1 = format_GeologyFortmationsgeological_formations_1.readFeatures(json_GeologyFortmationsgeological_formations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologyFortmationsgeological_formations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeologyFortmationsgeological_formations_1.addFeatures(features_GeologyFortmationsgeological_formations_1);
var lyr_GeologyFortmationsgeological_formations_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeologyFortmationsgeological_formations_1, 
                style: style_GeologyFortmationsgeological_formations_1,
                interactive: true,
    title: 'Geology Fortmations — geological_formations<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_0.png" /> al<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_1.png" /> c4<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_2.png" /> dl  c4<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_3.png" /> Ks<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_4.png" /> M2<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_5.png" /> M2\'\'3<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_6.png" /> M3<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_7.png" /> Pl<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_8.png" /> Ts  ph<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_9.png" /> Ts ph<br />\
    <img src="styles/legend/GeologyFortmationsgeological_formations_1_10.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_GeologyFortmationsgeological_formations_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GeologyFortmationsgeological_formations_1];
lyr_GeologyFortmationsgeological_formations_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'Geology': 'Geology', 'UserName': 'UserName', });
lyr_GeologyFortmationsgeological_formations_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'id': 'TextEdit', 'Geology': 'TextEdit', 'UserName': 'TextEdit', });
lyr_GeologyFortmationsgeological_formations_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'Geology': 'no label', 'UserName': 'no label', });
lyr_GeologyFortmationsgeological_formations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});