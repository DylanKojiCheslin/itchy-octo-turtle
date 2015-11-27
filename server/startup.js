Meteor.startup(function(){
  if (! ClassesCollection.findOne()) {
    ClassesCollection.insert(
      {"title":"homeroom",
       "time":"first"
      },
    );
    ClassesCollection.insert(
      {"title":"writing",
       "time":"second"
      },
    );
    ClassesCollection.insert(
      {"title":"history",
       "time":"third"
      },
    );
    ClassesCollection.insert(
      {"title":"math",
       "time":"forth"
      },
    );

  }
});
