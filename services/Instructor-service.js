import {InstructorData} from "../data/Instructor-data.js";

export default class InstructorService {
    constructor(){
        this.Instructors=[];

        InstructorData.forEach(element => {
            this.Instructors.push(element);

        });
        


    }

    showInfos(){
        console.log(this.Instructors)
      }
    
    
}