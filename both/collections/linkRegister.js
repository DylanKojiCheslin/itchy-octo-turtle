
Classes.registerLinkableType(Students, "students");
configureLinkableType(Classes, Students, "students");

Students.registerLinkableType(Classes, "classes");
configureLinkableType(Students, Classes, "classes");
