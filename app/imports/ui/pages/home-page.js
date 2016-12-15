import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Vendors } from '../../api/vendors/vendors.js';

/* eslint-disable object-shorthand */

Template.Home_Page.helpers({
  /**
   * @returns {String} Returns the user who's logged in
   */
  user: function user() {
    return Meteor.user() ? Meteor.user().profile.name : 'No logged in user';
  },

  atDorms: function() {
    return Vendors.find({location: "Dorms"});
  },
  atCC: function() {
    return Vendors.find({location: "Campus Center"});
  },
  atPP: function() {
    return Vendors.find({location: "Paradise Palms"});
  },
  atMisc: function() {
    return Vendors.find({}, {location: {'Dorms': false, 'Campus Center': false, 'Paradise Palms': false}});
  },

  vendorList: function() {
    return Vendors.find();
  }
});