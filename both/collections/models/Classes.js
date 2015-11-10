Classes = LinkableModel.extendAndSetupCollection("classes");
ClassesCollection = Classes.collection;

// //add students linikable

//asdfasdgasdg

Classes.appendSchema({
  "title":{
      type: String,
      max: 20
   },
   "links" : {
    type : Object,
    optional : true,
  },
});

Classes.methods({
	"className": function(){
		return this.title;
	},
	"classSlug": function(){
		return this._id;
	},
  // 'getStudentClass' : function(error, result) {
  //   var studentsClass = Meteor.wrapAsync(StudentsCollection.findOne());
  //   if (error) {
  //     return error
  //   }
  //   if (result) {
  //     return studentsClass;
  //   }
  // }
});


// if(Meteor.isServer){
// var aClass = Meteor.wrapAsyc(getStudentClass);

//}





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
