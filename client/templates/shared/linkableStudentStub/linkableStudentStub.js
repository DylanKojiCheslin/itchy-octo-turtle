Template.linkableStudentStub.events({
  "click .studentLinkBtn": function(e){
     e.preventDefault();
     //set Session.objToLinkType to "student"
     Session.set("objToLinkType", "student");
     //set Session.objToLink to this._Id
     Session.set("objToLink", this._id);
     $(".being-linked").removeClass("being-linked")
     $(e.currentTarget).parent().addClass("being-linked");
  },
  "click .addClassForStudent": function(e){
    e.preventDefault();
    // if its a class
    if (Session.get("objToLinkType") == "class"
    ) {
      //link this to Session.objToLinkType
      this.addClasses(Session.get("objToLink"));
    }
  }
});

Template.linkableStudentStub.helpers({
  linkableObjectExistsAndIsClass: function(){
    return(
     Session.get('objToLinkType') == "student"
    )
  },
});
