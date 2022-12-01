import { Category } from "./category";
import { Image } from "./image";
import { ProductByLang } from "./productByLang";
import { Provider } from "./provider";

export class Product {
    id : number = 0;
    price : number = 0;
    productByLang : ProductByLang[] = [];
    images : Image[] = [];
    category : Category = new Category();
    nmAvailableItems : number = 0;
    createdAt : Date = new Date();
    modifiedAt : Date | null = null;
    deletedAt : Date | null = null;
    provider : Provider = new Provider();
}