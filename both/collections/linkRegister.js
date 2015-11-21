
Classes.registerLinkableType(Students, "student");
configureLinkableType(Classes, Students, "student");

Students.registerLinkableType(Classes, "classes");
configureLinkableType(Students, Classes, "classes");
