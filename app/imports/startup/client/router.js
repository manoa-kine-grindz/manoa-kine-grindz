import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { GoogleMaps } from 'meteor/dburles:google-maps';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/menu', {
  name: 'Menu',
  action() {
    BlazeLayout.render('App_Body', { main: 'Menu' });
  },
});

FlowRouter.route('/calendar', {
  name: 'Calendar',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar' });
  },
});

FlowRouter.route('/{{user}}', {
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

FlowRouter.route('/search-for', {
  name: 'Search_For_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_For_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
