Students = BaseModel.extendAndSetupCollection("students");
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
