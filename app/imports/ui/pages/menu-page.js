import { Template } from 'meteor/templating';
import { Menu } from '../../api/menuItems/menu.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  menuList() {
    return Menu.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Menu');
  });
});
