export default class Instructor {
  constructor(InstructorId,InstructorName) {
    InstructorId = this.InstructorId;
    InstructorName = this.InstructorName;
  }
  showInfosInstructor(){
    console.log("InstructorId",this.InstructorId,"InstructorName:",this.InstructorName);
}
}
