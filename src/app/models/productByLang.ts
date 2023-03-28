import { LangCons } from './lang-cons.enum';
import { Product } from "./product";

export class ProductByLang{
    id : number = 0;
    name : string= '';
    description : string= '';
    langCons : LangCons = LangCons.EN;
    product : Product = new Product();
}