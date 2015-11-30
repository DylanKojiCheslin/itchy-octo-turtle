
Classes.registerLinkableType(Students, "students");
configureLinkableType(Classes, Students, "students");

Students.registerLinkableType(Classes, "classes");
configureLinkableType(Students, Classes, "classes");

Subjects.registerLinkableType(Subjects, "subjects");
configureLinkableType(Subjects, Subjects, "subjects")
