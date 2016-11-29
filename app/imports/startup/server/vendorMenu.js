/**
 * Created by mhoe1 on 11/10/2016.
 */
import {Vendors} from '../../api/vendors/vendors.js';
import {MenuItems} from '../../api/menuItems/menuItems.js';
import {_} from 'meteor/underscore';

const vendorSeeds = [
  { name: 'Panda Express', cuisine: 'Chinese' },
  { name: 'Subway', cuisine: 'Subway Sandwhiches' },
  { name: 'Da Grill', cuisine: 'Local Hawaiian' },
  { name: 'Stir Fresh', cuisine: 'Flash Fried' },
];

if (Vendors.find().count() === 0) {
  _.each(vendorSeeds, function seedVendors(stuff) {
    Vendors.insert(stuff);
  });
}