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
    return Vendors.find({location: "Dorms"}).fetch();
  },
  atCC: function() {
    return Vendors.find({location: "Campus Center"}).fetch();
  },
  atPP: function() {
    return Vendors.find({location: "Paradise Palms"}).fetch();
  },
  atMisc: function() {
    return Vendors.find({location: "Misc"}).fetch();
  }
});