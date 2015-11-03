Students = LinkableModel.extendAndSetupCollection("students");
Students.appendSchema(LinkableModel.LinkableSchema);
Students.appendSchema({
  "firstName":{
      type: String,
      max: 20
  },
  "lastName": {
      type: String,
      max: 20
  }
});

Meteor.students.allow({
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

Students.methods({
  "fullName": function(){
    return this.firstName + " " + this.lastName;
  },
  "studentSlug": function(){
    return this._id
  }
})
