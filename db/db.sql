CREATE TABLE "instructor" (
	"id" serial NOT NULL,
	"name" varchar(32) NOT NULL,
	"username" varchar(32) NOT NULL,
	"password" varchar(32) NOT NULL,
	CONSTRAINT Instructor_pk PRIMARY KEY ("id")
);



CREATE TABLE "course" (
	"id" serial NOT NULL,
	"name" varchar(32) NOT NULL,
	"term" varchar(8) NOT NULL,
	CONSTRAINT Course_pk PRIMARY KEY ("id")
);



CREATE TABLE "courseInstructor" (
	"CourseId" integer NOT NULL,
	"InstructorId" integer NOT NULL,
	FOREIGN KEY ("CourseId") REFERENCES "course"("id"),
	FOREIGN KEY ("InstructorId") REFERENCES "instructor"("id"),
	CONSTRAINT CourseInstructor_pk PRIMARY KEY ("CourseId","InstructorId")
);



CREATE TABLE "lecture" (
	"id" serial NOT NULL,
	"name" varchar(32) NOT NULL,
	"pdf" bytea,
	CONSTRAINT Lecture_pk PRIMARY KEY ("id")
);



CREATE TABLE "post" (
	"id" serial NOT NULL,
	"type" integer NOT NULL,
	"poster" varchar(32) NOT NULL,
	"message" varchar(255) NOT NULL,
	"Page" integer NOT NULL,
	"X0" integer,
	"X1" integer,
	"Y0" integer,
	"Y1" integer,
	"Timestamp" TIMESTAMP NOT NULL,
	CONSTRAINT Post_pk PRIMARY KEY ("id")
);



CREATE TABLE "lecturePost" (
	"LectureId" integer NOT NULL,
	"PostId" integer NOT NULL,
	FOREIGN KEY ("LectureId") REFERENCES "lecture"("id"),
	FOREIGN KEY ("PostId") REFERENCES "post"("id"),
	CONSTRAINT LecturePost_pk PRIMARY KEY ("LectureId","PostId")
);



CREATE TABLE "courseLecture" (
	"CourseId" integer NOT NULL,
	"LectureId" integer NOT NULL,
	FOREIGN KEY ("CourseId") REFERENCES "course"("id"),
	FOREIGN KEY ("LectureId") REFERENCES "lecture"("id"),
	CONSTRAINT CourseLecture_pk PRIMARY KEY ("CourseId","LectureId")
);



CREATE TABLE "postRef" (
	"PostId" integer NOT NULL,
	"RefPostId" integer NOT NULL,
	FOREIGN KEY ("PostId") REFERENCES "post"("id"),
	FOREIGN KEY ("RefPostId") REFERENCES "post"("id"),
	CONSTRAINT PostRef_pk PRIMARY KEY ("PostId","RefPostId")
);



