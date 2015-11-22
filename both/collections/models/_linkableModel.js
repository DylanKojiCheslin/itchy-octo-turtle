
LinkableModel.prototype.registerLinkableType = function (model, type) {
    model.prototype._objectType = type;
    LinkableTypes[type] = model.prototype._collection;
};

addLinkSchema = function() {
  var addSchema = function(model) {
    model.appendSchema({
      "links" : {
        type : Object,
        optional : true,
      }
    });
  };

  var calledCollections = [];
  return function(model) {
      if(!_.contains(calledCollections, model.collection._name)) {
        addSchema(model);
        calledCollections.push(model.collection._name);
      } else {
        console.log("Already called");
      }
  }
}();

addMethodToModel = function(model, prefix, type, func) {
	var methodName = prefix + type;
	var methods = {};
	methods[methodName] = func;
	model.methods(methods);
}

configureLinkableType = function(collection, model, type) {
  addLinkSchema(collection);
  var schemaString = "links." + type;
    var schemaObject = {};
    schemaObject[schemaString] = {
	    type : [String],
      regEx:SimpleSchema.RegEx.Id,
      autoform: {omit: true}
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
		return LinkableModel.getCollectionForRegisteredType(type).find({
      _id : {$in : this.links[type]}}).fetch();
	});
  //remove
  addMethodToModel(collection, 'remove', upperCaseString, function(linkID){
    var query = {};
		query[schemaString] = [linkID];
		this.update({$pullAll : query});
	});
}
// bindLinkableModels = function (thisModelString, otherModel, otherType) {
// registerLinkableType(otherModel, otherType);
// configureLinkableType(Classes, otherModel, otherType);
// // Classes.registerLinkableType(Classes, "classes");
// // configureLinkableType(Students, Classes, "classes");
// };
