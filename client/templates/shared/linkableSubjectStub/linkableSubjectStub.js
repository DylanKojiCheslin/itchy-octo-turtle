Template.linkableSubjectStub.events({
  "click .subjectLinkBtn": function(e){
     e.preventDefault();
     //set Session.objToLinkType to "subject"
     Session.set("objToLinkType", "subject");
     //set Session.objToLink to this._Id
     Session.set("objToLink", this._id);
     $(".being-linked").removeClass("being-linked")
     $(e.currentTarget).parent().addClass("being-linked");
  },
  "click .addSubject": function(e){
    e.preventDefault();
    // if its a class
    if (Session.get("objToLinkType") == "class"|Session.get("objToLinkType") == "student") {
      //link this to Session.objToLinkType
      this.addClasses(Session.get("objToLink"));
    }
  }
});

Template.linkableSubjectStub.helpers({
  linkableObjectExistsAndIsClass: function(){
    return(
     Session.get('objToLinkType') == "subject"
    )
  },
});
