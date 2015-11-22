Router.configure({
  layoutTemplate: 'layout',
  trackPageView: true
});

Router.route('/', {
  name: 'home'
});

Router.route('/student/:_id', function() {
  var studentData = Meteor.students.findOne({_id: this.params._id});
  this.render("student", {data: studentData});
});

Router.route('/class/:_id', function() {
  var classData = Meteor.classes.findOne({_id: this.params._id});
  this.render("class", {data: classData});
});

Router.route('/subject/:_id', function() {
  var subjectData = Meteor.subjects.findOne({_id: this.params._id});
  this.render("subject", {data: subjectData});
});
