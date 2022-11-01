var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Blocks_1 = new ol.format.GeoJSON();
var features_Blocks_1 = format_Blocks_1.readFeatures(json_Blocks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blocks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blocks_1.addFeatures(features_Blocks_1);
var lyr_Blocks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Blocks_1, 
                style: style_Blocks_1,
                interactive: true,
                title: '<img src="styles/legend/Blocks_1.png" /> Blocks'
            });
var format_Parcels_2 = new ol.format.GeoJSON();
var features_Parcels_2 = format_Parcels_2.readFeatures(json_Parcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_2.addFeatures(features_Parcels_2);
var lyr_Parcels_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcels_2, 
                style: style_Parcels_2,
                interactive: true,
                title: '<img src="styles/legend/Parcels_2.png" /> Parcels'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Blocks_1.setVisible(true);lyr_Parcels_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Blocks_1,lyr_Parcels_2];
lyr_Blocks_1.set('fieldAliases', {'WardNumber': 'WardNumber', 'Ward_Area': 'Ward_Area', 'Prop_Zone': 'Prop_Zone', 'ZON_NAME': 'ZON_NAME', 'WRD_ID': 'WRD_ID', 'WRD_AREA': 'WRD_AREA', 'BLOCK_ID': 'BLOCK_ID', });
lyr_Parcels_2.set('fieldAliases', {'descriptio': 'descriptio', 'ZON_NAME': 'ZON_NAME', 'WRD_ID': 'WRD_ID', 'WRD_AREA': 'WRD_AREA', 'BLOCK_ID': 'BLOCK_ID', 'House_No': 'House_No', 'DDN': 'DDN', 'SS': 'SS', });
lyr_Blocks_1.set('fieldImages', {'WardNumber': 'Range', 'Ward_Area': 'TextEdit', 'Prop_Zone': 'TextEdit', 'ZON_NAME': 'TextEdit', 'WRD_ID': 'TextEdit', 'WRD_AREA': 'Range', 'BLOCK_ID': 'TextEdit', });
lyr_Parcels_2.set('fieldImages', {'descriptio': 'TextEdit', 'ZON_NAME': 'TextEdit', 'WRD_ID': 'TextEdit', 'WRD_AREA': 'Range', 'BLOCK_ID': 'TextEdit', 'House_No': 'TextEdit', 'DDN': 'TextEdit', 'SS': 'TextEdit', });
lyr_Blocks_1.set('fieldLabels', {'WardNumber': 'no label', 'Ward_Area': 'no label', 'Prop_Zone': 'no label', 'ZON_NAME': 'no label', 'WRD_ID': 'no label', 'WRD_AREA': 'no label', 'BLOCK_ID': 'no label', });
lyr_Parcels_2.set('fieldLabels', {'descriptio': 'no label', 'ZON_NAME': 'header label', 'WRD_ID': 'header label', 'WRD_AREA': 'no label', 'BLOCK_ID': 'header label', 'House_No': 'header label', 'DDN': 'header label', 'SS': 'no label', });
lyr_Parcels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});