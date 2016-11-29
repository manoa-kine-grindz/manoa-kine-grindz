/**
 * Created by mhoe1 on 11/10/2016.
 */
import { Vendors } from '../../api/vendors/vendors.js';
import { _ } from 'meteor/underscore';

var vendorSeeds = [
  {name: "Sergei's", cuisine: "Mexican", location: "Misc"},
  {name: "Panda Express", cuisine: "Chinese", location: "Paradise Palms"},
  {name: "Da Grill", cuisine: "American", location: "Campus Center"},
  {name: "Gateway", cuisine: "Fusion", location: "Dorms"},
];

if (Vendors.find().count() === 0) {
  _.each(vendorSeeds, function(vendors) {
    Vendors.insert(vendors);
  });
}