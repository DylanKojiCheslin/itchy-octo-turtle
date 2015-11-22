Template.subjects.helpers({
  ofTheSubjects: function(){
     return Meteor.subjects.find();
  }
});
