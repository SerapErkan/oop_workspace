//course ekle 
//course sil 
//course search
// tüm kursları getir 
// ıd verilen kursu alan ögrenci sayısını getire 
import { courseData } from "../data/course-data.js";

export default class courseService {
  constructor(loggerService) {
    this.courses = [];
    this.loggerService=loggerService

    for (const index of courseData) {
      this.courses.push(index);
    }
  }
  //kurs ekle
  courseAdd(course) {
    this.courses.push(course);
    // console.log("kayıt eklendi ",course.corseId)
    this.loggerService.log("course added",course)
  }
  //kurs sil
  deleteCourseRecord(courseID) {
    let del = this.courses.findIndex((c) => c.courseId === courseID);
    if (del > -1) {
      this.courses.splice(del, 1);
    }
    // console.log("Kayıt silindi" );
    this.loggerService.log("course deleted",courseID)
  }
  //kurs güncelleme
  updateCourseRecord(
    courseId,
    courseName,
    description,
    Instructor,
    coursePrice
    ) {

    let find = this.courses.findIndex((c) => c.courseId=== courseId);
    this.courses[find].courseName=courseName;
    this.courses[find].coursePrice=coursePrice;
    this.courses[find].description=description;
    this.courses[find].Instructor=Instructor;
    return  this.loggerService.log("course updated", courseId)
    //  console.log("Kurs Güncellendi",courseId);

  }
  //tüm kurslar
  getAllCourseRecord() {
    console.log("Tüm kullanıcılar", this.courses);
  }

// kurslarım 

getFilterCourseName(courseName){
  let filter;
   filter= this.courses.filter((p) => {
     return p.courseName.includes(courseName);
});
console.log("filter:",filter);
}
 }