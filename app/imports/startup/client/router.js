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

FlowRouter.route('/tos', {
  name: 'ToS',
  action() {
    BlazeLayout.render('App_Body', { main: 'ToS' });
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
