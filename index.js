// Model
import Category from "./models/category-model.js";
import Course from "./models/course-model.js";
import User from "./models/user-model.js";
import Instructor  from "./models/Instructor-model.js";
//Service
import userService from "./services/user-service.js";
import categoryService from "./services/category-service.js";



let user1=new User(7,"srp","sss","123","c++","java","python");
//--user
const serviceUsers=new userService();
serviceUsers.userAdd(user1);
serviceUsers.deleteUserRecord(3);
serviceUsers.updateUserRecord(7,"srpERKAN","ccc","45@gmail");
serviceUsers.getAllUserRecord();

//--category


