Classes = LinkableModel.extendAndSetupCollection("classes");
ClassesCollection = Classes.collection;


Classes.appendSchema({
  "title":{
      type: String,
      max: 20
   },

});

Classes.methods({
	"className": function(){
		return this.title;
	},
	"classSlug": function(){
		return this._id;
	},
  // create a function to return linked students as list to view
});
