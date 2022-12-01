import { Category } from "./category";

export class CategoryByLang{
    id : number = 0;
    name : string = '';
    langCode : LangCons = LangCons.ENG;
    category : Category = new Category();
}

enum LangCons {
    ENG = "Eng",
    ES = "Esp",
    FR = "Fr",
}