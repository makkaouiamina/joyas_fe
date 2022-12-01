import { CategoryByLang } from "./categoryByLang";

export class Category{
    id : number = 0;
    //thinking about changing categoryCode to Enum
    categoryCode : string = '';
    categoryByLang : CategoryByLang[] = [];
}