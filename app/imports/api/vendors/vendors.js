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
    label: 'cuisine',
    type: String,
    optional: false,
    max: 15,
    autoform: {
      group: 'Vendors',
      placeholder: 'What kine food they sell',
    },
  }
});

Vendors.attachSchema(VendorSchema);