export default class Category {
    constructor(id,categoryName,description) {
        this.id = id;
        this.categoryName=categoryName;
        this.description=description;
        
    }

    showInfos(){
        console.log("id:",this.id,"categoryName:",this.categoryName,"description:",this.description);
       
    }

}