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
    var studentsIdsArray = [];
    var seachSelector = {};
    var studentsCurssor = {};
    var studentsArray = [];
    var getStudentsFullName = function(element){
      return element.fullName()
    };
    studentsIdsArray = this.links.student;
    seachSelector._id = { $in: studentsIdsArray};
    studentsCurssor = StudentsCollection.find(seachSelector);
    studentsArray = studentsCurssor.map(getStudentsFullName);
    return studentsArray;
  }
});
