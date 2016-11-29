/**
 * Created by junoa on 11/28/2016.
 */
import { Vendors } from '../../api/vendors/vendors.js';
import { Template } from 'meteor/templating';

Template.Search_For_Page.helpers({
  vendorList(){
    return Vendors.find();
  },
});