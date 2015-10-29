Classes = BaseModel.extendAndSetupCollection("classes");
Classes.appendSchema({
  "title":{
      type: String,
      max: 20
  }
});
