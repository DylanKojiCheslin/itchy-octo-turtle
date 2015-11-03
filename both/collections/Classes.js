Classes = LinkableModel.extendAndSetupCollection("classes");

LinkableModel.registerLinkableType(Classes, "classes");

ClassesCollection = Classes.collection;

Classes.appendSchema({
  "title":{
      type: String,
      max: 20
    },
});
Classes.appendSchema(LinkableModel.LinkableSchema);

Classes.prototype.addStudent = function (newStudent) {
    var type = this._objectType;
    new Students({
      "firstName": newStudent.firstName,
      "lastName": newStudent.lastName,
      linkedObjectId:this._id,
      objectType:type
    }).save();
};
//
// Meteor.classes.allow({
//   insert: function(){
//         return true;
//     },
//     update: function(){
//         return true;
//     },
//     remove: function() {
//         return true;
//     }
// });

Classes.methods({
  "className": function(){
    return this.title;
  },
  "classSlug": function(){
    return this._id;
  }
})
