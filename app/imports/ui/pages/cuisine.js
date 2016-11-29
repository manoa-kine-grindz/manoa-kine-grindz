/**
 * Created by mhoe1 on 11/10/2016.
 */
import { Template } from 'meteor/templating';
import { Cuisine } from '../../api/cuisine/cuisine.js';

Template.Cuisine.helpers({
  cuisineList: function() {
    return Cuisine.find();
  }
});