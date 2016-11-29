/**
 * Created by mhoe1 on 11/10/2016.
 */
import { Template } from 'meteor/templating';
import { GoogleMaps } from 'meteor/dburles:google-maps';

import './map.html';

Template.map.helpers({
  exampleMapOptions() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8,
      };
    }
  },
});

Template.map.rendered = function() {
  var mapOptions = {
    center: new google.maps.LatLng(-37.8136, 144.9631),
    zoom: 8,
  };
};

Template.map.onCreated(function() {
  GoogleMaps.ready('exampleMap', function(map) {
    console.log("I'm ready!");
  });
});