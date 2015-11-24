Template.linkableClassStub.events({
  "click .classLinkBtn": function(e){
     e.preventDefault();
     //set Session.objToLink to this._Id
     //set Session.objToLinkType to "class"
  },
  "click .addStudentsToClass": function(e){
    e.preventDefault();
    //link this to Session.objectTolink if its a student
  }
});
