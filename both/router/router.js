Router.configure({
  layoutTemplate: 'layout',
  trackPageView: true
});

Router.route('/', {
  name: 'home'
});

Router.route('/student/:_id', function() {
  var studentData = Students.findOne({_id: this.params._id});
  this.render("student", {data: studentData});
});

Router.route('/class/:_id', function() {
  var classData = Class.findOne({_id: this.params._id});
  this.render("class", {data: classData});
});
