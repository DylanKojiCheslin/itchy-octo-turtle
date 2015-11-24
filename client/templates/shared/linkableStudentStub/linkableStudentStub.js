Template.linkableStudentStub.events({
  "click .studentLinkBtn": function(e){
     e.preventDefault();
     //set Session.objToLink to this._Id
     //set Session.objToLinkType to "student"
  },
  "click .addClassForStudent": function(e){
    e.preventDefault();
    //link this to Session.objectTolinkType if its a class
  }
});
