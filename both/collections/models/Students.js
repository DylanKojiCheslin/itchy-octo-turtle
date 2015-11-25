Students = LinkableModel.extendAndSetupCollection("students");
StudentsCollection = Students.collection;
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
  },
  "listClasses": function(){
    var classesIdsArray = [];
    var seachSelector = {};
    var classesCurssor = {};
    var classesArray = [];
    var getClassName = function(element){
      return element.className()
    };
    classesIdsArray = this.links.classes;
    if (classesIdsArray) {
    seachSelector._id = { $in: classesIdsArray};
    classesCurssor = ClassesCollection.find(seachSelector);
    classesArray = classesCurssor.map(getClassName);
    return classesArray;
    }
  }
})
