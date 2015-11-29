Classes = LinkableModel.extendAndSetupCollection("classes");
ClassesCollection = Classes.collection;


Classes.appendSchema({
  "title":{
      type: String,
      max: 20
   },
   "time":{
     type: String,
     max: 30
   }
});

Classes.methods({
	"className": function(){
		return this.time + " " + this.title;
	},
	"classSlug": function(){
		return this._id;
	},
  "listStudents": function(){
    if (! (typeof this.links == 'undefined')) {
      var studentsIdsArray = [];
      var seachSelector = {};
      var studentsCurssor = {};
      var studentsArray = [];
      var getStudentsFullName = function(element){
        return element.fullName()
      };
      studentsIdsArray = this.links.students;
      seachSelector._id = { $in: studentsIdsArray};
      studentsCurssor = StudentsCollection.find(seachSelector);
      studentsArray = studentsCurssor.map(getStudentsFullName);
      return studentsArray;
    }
  }
});
