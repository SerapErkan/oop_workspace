// Model
import Category from "./models/category-model.js";
import Course from "./models/course-model.js";
import User from "./models/user-model.js";
import Instructor from "./models/Instructor-model.js";
//Service
import userService from "./services/user-service.js";
import categoryService from "./services/category-service.js";
import courseService from "./services/course-service.js";
import InstructorService from "./services/Instructor-service.js";

//--user
const serviceUsers = new userService();
let user1 = new User(7, "srp", "sss", "123", "c++", "java", "python");
serviceUsers.userAdd(user1);
serviceUsers.deleteUserRecord(3);
serviceUsers.updateUserRecord(7, "srpERKAN", "ccc", "45@gmail");
serviceUsers.getAllUserRecord();

//--category
console.log("-----------------");
const serviceCategory = new categoryService();
let category1 = new Category(7, "c#");

serviceCategory.categoryAdd(category1);
serviceCategory.getFilterCategoryName("Programlama");
serviceCategory.deleteCategoryRecord(2);
serviceCategory.getAllCategoryRecord();
serviceCategory.updateCategoryRecord(1, "update Programlama");

// ---course
console.log("-----------------");

let course1 = new Course(
  9,
  " YENİ ",
  "ileri seviye ",
  "ANGULAR,JS",
  "Engin Demirog",
  "PAHALI"
);


const serviceCourse = new courseService();
serviceCourse.courseAdd(course1);
serviceCourse.deleteCourseRecord(2);
serviceCourse.updateCourseRecord(
  1,
  "Yazılım Geliştirici",
  "sıfırdan yazılım geliştirme öğreniyoruz",
  "Engin Demirog",
  "pahalı"
);
serviceCourse.getAllCourseRecord();
serviceCourse.getFilterCourseName("YENİ");
serviceCourse.getAllCourseRecord();


//
course1.showInfosCourse();
console.log("-----------------");
user1.showInfosUser();
console.log("-----------------");
category1.showInfosCategory();


// ---Instructor
console.log("-----------------");
const Instructor1=new Instructor(5,"yeni kayit");
const serviceInstructor= new InstructorService();
serviceInstructor.showInfos();






