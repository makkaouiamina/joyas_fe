import { LangCons } from './lang-cons.enum';
import { Category } from "./category";

export class CategoryByLang{
    id : number = 0;
    name : string = '';
    langCode : LangCons = LangCons.EN;
    category : Category = new Category();
}