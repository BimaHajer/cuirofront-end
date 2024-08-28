import { Transaction } from "../finance/transaction/transaction";
import { Founisseur } from "../founisseur/founisseur";
import { Product } from "../products/products/product";

export class Buying {
    id?:number;
    total_price?:number
    isComplete?:boolean
    isValid?:boolean
    createAt?:Date
    buyingDetails?:BuyingDetail[]  
    idProvider?: Founisseur;
    transactions?:  Transaction [];
}
export class BuyingDetail{
    id?: number;
    tax?: number 
    price?: number 
    amount?: number 
    quantity?: number
    discount?: number
    createdAt?: Date 
    productId?:Product 
    buyingId?:number
}
