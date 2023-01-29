import { Category } from "./category";

export class CategoryByLang{
    id : number = 0;
    name : string = '';
    langCode : LangCons = LangCons.EN;
    category : Category = new Category();
}

enum LangCons {
    EN = "En",
    ES = "Es",
    FR = "Fr",
}