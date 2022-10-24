export default class Category {
    constructor(id,categoryName) {
        this.id = id;
        this.categoryName=categoryName;
        
    }

    showInfosCategory(){
        console.log("id:",this.id,"categoryName:",this.categoryName);
    }

}