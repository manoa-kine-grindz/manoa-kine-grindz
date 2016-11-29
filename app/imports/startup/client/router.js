import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/cuisine', {
  name: 'Cuisine',
  action() {
    BlazeLayout.render('App_Body', { main: 'Cuisine' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar' });
  },
});

FlowRouter.route('/{user}', {
  name: 'Profile_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile_Page' });
  },
});

FlowRouter.route('/map', {
  name: 'Map',
  action() {
    BlazeLayout.render('App_Body', { main: 'Map' });
  },
});

<<<<<<< HEAD
FlowRouter.route('/tos', {
  name: 'ToS',
  action() {
    BlazeLayout.render('App_Body', { main: 'ToS' });
  },
});

=======
FlowRouter.route('/search-for', {
  name: 'Search_For_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_For_Page' });
  },
});

FlowRouter.route('/edit-profile', {
  name: 'Edit_Profile',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Profile' });
  },
});
>>>>>>> refs/remotes/origin/master

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
