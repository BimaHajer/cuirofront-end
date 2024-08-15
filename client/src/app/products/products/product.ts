
import { Units } from '../units-measures/units';
import { Mark } from '../marks/mark';
import { CommandDetail } from 'src/app/commande/commande';
import { Accessoire } from '../accessoire/accessoire';
import { Category } from '../category/category';
import { Price } from '../prices/prices';
import { TVA } from '../tva/tva';
import { Picture } from './picture';
export class Product {
    public id?: number ;
    public name?:string;
    public description?:string;
    public createAt?: Date ;
    public updateAt?: Date ;
    public isActive?: boolean ;
    public createBy?: number ;
    public updatedBy?: number ;
    public priceHorsTax?:number;
    public priceTTC?:number;
    public productDetail?:ProductDetail[] 
    public CommandDetails?: CommandDetail[];
    public pictures?: Picture[];
    public quantity?: number; 
    public price?: number;
}

export class ProductDetail{
    public id?: number;
    public createAt?:Date;
    public updateAt?:Date;
    public createBy?:number;
    public updatedBy?:number;
    public isActive?:boolean
    public color?:string;
    public quantity?:number;
    public accessoireId?: Accessoire;
    public markId?: number | Mark;
    public categoryId?: Category;
    public unitsId?:  Units;  
    public priceId?:Price ;
    public TVAId?:TVA;
    public productId?: Product
    

}
