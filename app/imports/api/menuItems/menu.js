import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Menu = new Mongo.Collection('Menu');

/**
 * Create the schema for Stuff
 */
export const MenuSchema = new SimpleSchema({
  restaurant: {
    label: 'Restaurant',
    type: String,
    optional: false,
    max: 200,
  },
  item: {
    label: 'Item',
    type: String,
    optional: false,
    max: 200,
  },
  cuisine: {
    label: 'Cuisine',
    type: String,
    optional: false,
    max: 200,
  },
  price: {
    label: 'Price',
    type: Number,
    optional: false,
    max: 200,
  },
});

Menu.attachSchema(MenuSchema);
