import { Product } from "./product";

export class ProductByLang{
    id : number = 0;
    name : string= '';
    description : string= '';
    langCons : LangCons = LangCons.ENG;
    product : Product = new Product();
}

enum LangCons {
    ENG = "Eng",
    ES = "Esp",
    FR = "Fr",
}