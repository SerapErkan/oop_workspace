export default class Course {
    constructor(
        id,
        courseName,
        description,
        programmingLanguage,
        Instructor,
        coursePrice
    ) {
        this.id = id;
        this.courseName = courseName;
        this.description = description;
        this.programmingLanguage = programmingLanguage;
        this.Instructor = Instructor;
        this.coursePrice = coursePrice;
    }
    showInfosCourse() {
        console.log(
            "id:",
            this.id,
            "courseName:",
            this.courseName,
            "description:",
            this.description,
            "programmingLanguage:",
            this.programmingLanguage,
            "Instructor:",
            this.Instructor,
            "coursePrice:",
            this.coursePrice
        );
    }
}
