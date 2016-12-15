/**
 * Created by mhoe1 on 11/10/2016.
 */
import {Vendors} from '../../api/vendors/vendors.js';
import {_} from 'meteor/underscore';

const vendorSeeds = [
  { name: 'Panda Express', cuisine: 'Chinese', location: "Paradise Palms" },
  { name: 'Subway', cuisine: 'Subway Sandwiches', location: "Campus Center" },
  { name: 'Da Grill', cuisine: 'Local Hawaiian', location: "Campus Center" },
  { name: 'Stir Fresh', cuisine: 'Flash Fried', location: "Campus Center" },
  { name: 'Serges', cuisine: 'Mexican', location: "POST" },
  { name: 'Bale', cuisine: 'Vietnamese', location: "Hemenway Hall" },
  { name: 'Gateway Dining', cuisine: 'Varies by Week', location: "Dorms" },
];

if (Vendors.find().count() === 0) {
  _.each(vendorSeeds, function seedVendors(stuff) {
    Vendors.insert(stuff);
  });
}