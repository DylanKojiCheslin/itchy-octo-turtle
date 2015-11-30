Subjects = LinkableModel.extendAndSetupCollection("subjects");
SubjectsCollection = Subjects.collection;


Subjects.appendSchema({
  "name":{
      type: String,
      max: 20,
      label: "Subject"
   }
});

Subjects.methods({
	"subjectName": function(){
		return this.title;
	},
	"subjectSlug": function(){
		return this._id;
  },
  "relatedSubjects": function(){
    if (! (typeof this.links == 'undefined')) {
      console.log("finish relatedSubjects function");
    }
  }
});
