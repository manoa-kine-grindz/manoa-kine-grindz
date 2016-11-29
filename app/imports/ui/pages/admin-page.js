import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { Menu, MenuSchema } from '../../api/menuItems/menu.js';

/* eslint-disable no-param-reassign */

const displayErrorMessages = 'displayErrorMessages';

Template.Admin_Page.onCreated(function onCreated() {
  this.messageFlags = new ReactiveDict();
  this.messageFlags.set(displayErrorMessages, false);
  this.context = MenuSchema.namedContext('Admin_Page');
});

Template.Admin_Page.helpers({
  errorClass() {
    return Template.instance().messageFlags.get(displayErrorMessages) ? 'error' : '';
  },
  displayFieldError(fieldName) {
    const errorKeys = Template.instance().context.invalidKeys();
    return _.find(errorKeys, (keyObj) => keyObj.name === fieldName);
  },
});

// Template.Add_Contact_Page.onRendered(function enableSemantic() {
//   const instance = this;
//   instance.$('select.ui.dropdown').dropdown();
//   instance.$('.ui.selection.dropdown').dropdown();
//   instance.$('select.dropdown').dropdown();
//   instance.$('.ui.checkbox').checkbox();
//   instance.$('.ui.radio.checkbox').checkbox();
// });

Template.Admin_Page.events({
  'submit .contact-data-form'(event, instance) {
    event.preventDefault();
    // Get name (text field)
    const restaurant = event.target.restaurant.value;
    const item = event.target.item.value;
    const cuisine = event.target.cuisine.value;
    const price = event.target.price.value;
    const newItem = { restaurant, item, cuisine, price, };
    // Clear out any old validation errors.
    instance.context.resetValidation();
    // Invoke clean so that newContact reflects what will be inserted.
    ContactsSchema.clean(newItem);
    // Determine validity.
    instance.context.validate(newItem);
    if (instance.context.isValid()) {
      Menu.insert(newItem);
      instance.messageFlags.set(displayErrorMessages, false);
      FlowRouter.go('Admin_Page');
    } else {
      instance.messageFlags.set(displayErrorMessages, true);
    }
  },
});

