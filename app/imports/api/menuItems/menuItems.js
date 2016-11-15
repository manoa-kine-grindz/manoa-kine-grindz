/**
 * Created by mhoe1 on 11/10/2016.
 */
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const MenuItems = new Mongo.Collection('MenuItems');

export const MenuItemsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Vendors',
      placeholder: 'Who selling food',
    },
  },
  cuisine: {
    label: 'Name',
    type: String,
    optional: false,
    max: 15,
    autoform: {
      group: 'Vendors',
      placeholder: 'What kine food they sell',
    },
  }
});

MenuItems.attachSchema(MenuItemsSchema);