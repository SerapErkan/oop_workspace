
import { userData } from "../data/user-data.js";

export default class userService {
  constructor(loggerService) {
    this.users = [];
    this.loggerService=loggerService;

    for (const index of userData) {
      this.users.push(index);
  
    }
  }
  //kayit ekle
  userAdd(user) {
    this.users.push(user);
    this.loggerService.log("user added",user);
  // console.log("kayıt eklendi ",user.userId) logger ile düzenleme 
  }
  //kayit sil
  deleteUserRecord(userID) {
    let del = this.users.findIndex((c) => c.userId === userID);
    if (del > -1) {
      this.users.splice(del, 1);
    }
    // console.log("Kayıt silindi", userID);
    this.loggerService.log("user deleted",userID);
  }
  //kayit güncelleme
  updateUserRecord( userID,userName, userEmail, userPassword) {
   
    let find = this.users.findIndex((c) => c.userId === userID);
    this.users[find].password = userPassword;
    this.users[find].email = userEmail;
    this.users[find].userName = userName;
    return this.loggerService.log("user updated",userID);
    //console.log("Kayıt Güncellendi", userID);
      
  }
  //tüm kayitlar
  getAllUserRecord() {
    console.log("Tüm kullanıcılar", this.users);
  }
}
