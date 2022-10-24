export default class User {
    constructor(userId,userName,email,password) {
        this.userId = userId;
        this.userName=userName;
        this.email=email;
        this.password = password;
    }

    showInfosUser() {
        console.log(
        "userId",this.userId,
        "userName",this.userName,
        "email",this.email,
        "passwor",dthis.password 
        );
    }
}


