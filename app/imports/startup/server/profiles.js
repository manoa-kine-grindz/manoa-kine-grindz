/**
 * Created by mhoe1 on 12/14/2016.
 */
Meteor.publish('userData', function () {
  if(this.userId) {
    return Meteor.users.find({_id: this.userId}, {fields: {profile: 1, firstName: 1, lastName: 1}});
  }
  else {
    this.ready();
  }
});