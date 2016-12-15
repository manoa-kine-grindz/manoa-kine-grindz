import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { _ } from 'meteor/underscore';

/* eslint-disable no-console */


/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {
  if (user) {
    const username = user.services.cas.id;
    var first = user.services.cas.firstName;
    var last = user.services.cas.lastName;
    if (username && _.contains(Meteor.settings.allowed_users, username)) {
      Meteor.users.update({_id:Meteor.user()._id_}, {$set: {firstName: first, lastName: last}});

      var handle = Meteor.users.find({_id: userId}, {fields: {_id: 1}}).observe({
        added: function() {
          if(_.contains(Meteor.settings.adminUsers, user.services.cas.id)) {
            Roles.addUserToRoles(userId, ['admin']);
            handle.stop();
            handle = null;
          }
          else {
            Roles.addUsersToRoles(userId, ['student']);
          }
        }
      });
      return true;
    }
  }
  throw new Meteor.Error(403, 'User not in the allowed list');
});


Meteor.publish(null, function() {
  if(Roles.userIsInRole(userId, ['admin'], group)) {
    return Meteor.roles.find({});
  }
  else {
    this.stop();
    return;
  }
});

Meteor.methods({
  deleteUser: function(target, group) {
    var isAdmin = Meteor.user();

    if(!Roles.userIsInRole(isAdmin, ['admin'], group)) {
      throw new Meteor.Error(403, "Access denied");
    }

    Roles.setUserRoles(target, [], group);
    Meteor.users.remove(target);
  }
});

if (!Meteor.settings.cas) {
  console.log('CAS settings not found! Hint: "meteor --settings ../config/settings.development.json"');
}
