Template.linkableClassStub.events({
  "click .classLinkBtn": function(e){
     e.preventDefault();
     //set Session.objToLinkType to "class"
     Session.set("objToLinkType", "class");
     //set Session.objToLink to this._Id
     Session.set("objToLink", this._id);
     $(".being-linked").removeClass("being-linked")
     $(e.currentTarget).parent().addClass("being-linked");
  },
  "click .addStudentsToClass": function(e){
    e.preventDefault();
    //if its a student
    if (Session.get('objToLinkType') == "student") {
      //link this to Session.objToLink
      this.addStudents(Session.get("objToLink"));
    }
  }
});

Template.linkableClassStub.helpers({
  linkableObjectExistsAndIsStudent: function(){
    return(
     Session.get('objToLinkType') == "student"
    )
  },
});
