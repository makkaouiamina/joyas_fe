import { CategoryByLang } from "./categoryByLang";

export class Category{
    id : number = 0;
    categoryByLang : CategoryByLang[] = [];
    createdAt : Date = new Date();
}