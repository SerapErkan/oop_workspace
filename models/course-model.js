export default class Course {
  constructor(
    courseId,
    courseName,
    description,
    programmingLanguage,
    Instructor,
    coursePrice
  ) {
    this.courseId = courseId;
    this.courseName = courseName;
    this.description = description;
    this.programmingLanguage = programmingLanguage;
    this.Instructor=Instructor;
    this.coursePrice = coursePrice;
  }
  showInfosCourse() {
    console.log(
      "courseId:",
      this.courseId,
      "courseName:",
      this.courseName,
      "description:",
      this.description,
      "programmingLanguage:",
      this.programmingLanguage,
      "coursePrice:",
      this.coursePrice
    );
  }
}
