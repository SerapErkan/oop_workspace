//tüm kategorileri getir
// kategory ekle
// kategory sil 
// kategoryleri düzenle 
// kategory filitrele 


import { categoryData } from "../data/category-data.js";

export default class categoryService{
 constructor(){
    this.categories=[];
    for (const iterator of categoryData ) {
        this.categories.push(iterator);
    }
 }
 categoryAdd(category){
    this.categories.push(category);
 }
 deleteCategoryRecord(categoryId){
    let del=this.categories.findIndex((c)=>c.categoryId===categoryId);
    if(del>-1){
        this.categories.splice(del,1);
    }
 }
 updateCategoryRecord(categoryId,categoryName){
    let find=this.categories.findIndex((c)=>c.categoryId===categoryId);
    this.categories[find].categoryName=categoryName;
    return console.log("Kayıt Güncellendi",this.categories[find]);
 }
 getAllCategoryRecord(){
    console.log("tüm kategoriler" ,this.categories);
 }

// kategoriy seçime göre filitreleme 
getFilterCategoryName(categoryName){
   let categoriesFilter;
    categoriesFilter= this.categories.filter((p) => {
      return p.categoryName.includes(categoryName);

});
 
console.log("filter:",categoriesFilter);
}
}
