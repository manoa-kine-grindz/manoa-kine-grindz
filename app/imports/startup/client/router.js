import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

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
    BlazeLayout.render('App_Body', { main: 'Menu' });
  },
});

FlowRouter.route('/{{user}}', {
  name: 'Profile',
  action() {
    BlazeLayout.render('App_Body', { main: 'Profile' });
  },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
