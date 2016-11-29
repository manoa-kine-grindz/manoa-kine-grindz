/**
 * Created by mhoe1 on 11/10/2016.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Cuisine = new Mongo.Collection('Cuisine');

export const CuisineSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Country',
      placeholder: 'Where it from',
    },
  },
  flavor: {
    label: 'Flavor',
    type: String,
    optional: false,
    max: 15,
    autoform: {
      group: 'Flavor',
      placeholder: 'What it taste like',
    },
  },
  vendors: {
    label: 'Vendors',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Vendors',
      placeholder: 'Who selling it',
    },
  },
  location: {
    label: 'Location',
    type: String,
    optional: false,
    max: 25,
    autoform: {
      group: 'Location',
      placeholder: 'Whea it at',
    },
  }
});

Cuisine.attachSchema(CuisineSchema);