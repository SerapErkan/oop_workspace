export default class User {
    constructor(userId,userName,email,password,...userCourseList) {
        this.userId = userId;
        this.userName=userName;
        this.email=email;
        this.password = password;
        this.userCourseList=userCourseList;
    }

    showInfosUser() {
        console.log(
        "userId",this.userId,
        "userName",this.userName,
        "email",this.email,
        "passwor",dthis.password ,
        "userCourseList",...this.userCourseList
        );
    }
}

