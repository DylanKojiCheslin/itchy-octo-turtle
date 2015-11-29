Template.home.events({
  "click #clearLinking": function(e){
     e.preventDefault()
     Session.set("objToLinkType", "");
     $(".being-linked").removeClass("being-linked");
  }
});
