/**
 * Created by mhoe1 on 11/10/2016.
 */
import { Template } from 'meteor/templating';
import { Cuisine } from '../../api/cuisine/cuisine.js';

Template.Cuisine.helpers({
  cuisineList: function() {
    return Cuisine.find({}, { sort: {cuisine: 1}});
  }
});

Template.Cuisine.events({
  'click .sortCuisine': function() {
    return Cuisine.find({}, { sort: {cuisine: 1}});
  },
  'click .sortFlavor': function() {
    return Cuisine.find({}, { sort: {flavor: 1}});
  },
  'click .sortVendor': function() {
    return Cuisine.find({}, { sort: {vendor: 1}});
  },
  'click .sortLocation': function() {
    return Cuisine.find({}, { sort: {location: 1}});
  }
});