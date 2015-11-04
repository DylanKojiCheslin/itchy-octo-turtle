Classes = LinkableModel.extendAndSetupCollection("classes");

LinkableModel.prototype.registerLinkableType = function (model, type) {
    model.prototype._objectType = type;
    LinkableTypes[type] = model.prototype._collection;
};




var addMethodToModel = function(model, prefix, type, func) {
	var methodName = prefix + type;
	var methods = {};
	methods[methodName] = func;
	model.methods(methods);
}

LinkableModel.configureType = function(model, type) {
	var schemaString = "links." + type;
    var schemaObject = {};
    schemaObject[schemaString] = {
	    type : [String],
	    regEx:SimpleSchema.RegEx.Id,
    };
    model.appendSchema(schemaObject);
	var upperCaseString = type.charAt(0).toUpperCase() + type.slice(1);
	addMethodToModel(model, 'add', upperCaseString, function(linkID){
		var query = {};
		query[schemaString] = linkID;
		this.update({$addToSet : query});
	});	
	addMethodToModel(model, 'getLinked', upperCaseString, function(linkID){
		return LinkableModel.getCollectionForRegisteredType(type).find({_id : {$in : this.links[type]}}).forEach(function(object){
			console.log(object);
		});
	});
}

LinkableModel.registerLinkableType(Classes, "class");

LinkableModel.configureType(Classes, "class");

ClassesCollection = Classes.collection;

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
});







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

