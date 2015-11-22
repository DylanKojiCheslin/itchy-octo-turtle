Subjects = LinkableModel.extendAndSetupCollection("subjects");
SubjectsCollection = Subjects.collection;


Subjects.appendSchema({
  "name":{
      type: String,
      max: 20
   }
});

Subjects.methods({
	"subjectName": function(){
		return this.title;
	},
	"subjectSlug": function(){
		return this._id;
  }
});
