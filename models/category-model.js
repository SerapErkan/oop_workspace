export default class Category {
    constructor(categoryId,categoryName) {
        this.categoryId = categoryId;
        this.categoryName=categoryName;
    }
    showInfosCategory(){
        console.log("categoryId",this.categoryId,"categoryName:",this.categoryName);
    }

}