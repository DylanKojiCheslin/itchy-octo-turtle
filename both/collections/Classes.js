Classes = BaseModel.extendAndSetupCollection("classes");
Classes.appendSchema({
  "title":{
      type: String,
      max: 20
  }
});

Meteor.classes.allow({
  insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function() {
        return true;
    }
});

Classes.methods({
  "className": function(){
    return this.title;
  }
})
