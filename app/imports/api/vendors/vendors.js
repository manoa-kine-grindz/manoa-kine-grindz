/**
 * Created by mhoe1 on 11/10/2016.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Vendors = new Mongo.Collection('Vendors');

export const VendorSchema = new SimpleSchema({
  name: {
    label: 'name',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Vendors',
      placeholder: 'Who selling food',
    },
  },
  cuisine: {
<<<<<<< HEAD
    label: 'Cuisine',
=======
    label: 'cuisine',
>>>>>>> refs/remotes/origin/master
    type: String,
    optional: false,
    max: 15,
    autoform: {
      group: 'Cuisine',
      placeholder: 'What kine food they sell',
    },
  },
  location: {
    label: 'Location',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Location',
      placeholder: 'Whea they at',
    },
  }
});

Vendors.attachSchema(VendorSchema);