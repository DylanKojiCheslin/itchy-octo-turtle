
LinkableModel.prototype.registerLinkableType = function (model, type) {
    model.prototype._objectType = type;
    LinkableTypes[type] = model.prototype._collection;
};


LinkSchema = {
  "links" : {
	  type : Object,
	  optional : true,
  }
};

addMethodToModel = function(model, prefix, type, func) {
	var methodName = prefix + type;
	var methods = {};
	methods[methodName] = func;
	model.methods(methods);
}



configureLinkableType = function(collection, model, type) {
	var schemaString = "links." + type;
    var schemaObject = {};
    schemaObject[schemaString] = {
	    type : [String],
      regEx:SimpleSchema.RegEx.Id,
    };
    collection.appendSchema(schemaObject);
	var upperCaseString = type.charAt(0).toUpperCase() + type.slice(1);
  //add
	addMethodToModel(collection, 'add', upperCaseString, function(linkID){
		var query = {};
		query[schemaString] = linkID;
		this.update({$addToSet : query});
	});
  //get
	addMethodToModel(collection, 'getLinked', upperCaseString, function(){
		return LinkableModel.getCollectionForRegisteredType(type).find({_id : {$in : this.links[type]}}).forEach(function(object){
			console.log(object);
		});
	});
  //reomove
  addMethodToModel(collection, 'remove', upperCaseString, function(linkID){
    var query = {};
		query[schemaString] = [linkID];
		this.update({$pullAll : query});
	});
}
