import { Menu } from '../../api/menuItems/menu.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Menu Items to pre-fill the Collection.
 * @type {*[]}
 */
const menuSeeds = [
  {
    restaurant: 'Dominos Express',
    item: 'Pizza',
    cuisine: 'Italian',
    price: '0',
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Menu.find().count() === 0) {
  _.each(menuSeeds, function menuStuffs(stuff) {
    Menu.insert(stuff);
  });
}
