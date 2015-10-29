Template.students.helpers({
  ofTheStudents: function(){
     return Meteor.students.find();
  }
});
