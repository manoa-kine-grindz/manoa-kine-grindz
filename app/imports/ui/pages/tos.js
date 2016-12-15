/**
 * Created by mhoe1 on 11/29/2016.
 */
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.ToS.events({
  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function casLogin(event, instance) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
    location.href="./";
    return false;
  },
});