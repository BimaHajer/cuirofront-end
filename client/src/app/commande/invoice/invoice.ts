import { Customer } from "src/app/customer/customer/customer";
import { Transaction } from "src/app/finance/transaction/transaction";
import { Commande } from "../commande";
import { Product } from "src/app/products/products/product";

export class Invoice {
    public id?: any;
    public totalPrice?: number;
    public createAt?: Date;
    public updateAt?: Date;
    public isActive?: boolean;
    public isDeleted?: boolean;
    public createBy?: number;
    public updatedBy?: number;
    public commandId?: Commande[];
    public customerId?: number;
    public customer?: Customer;
    public transactions?: Transaction[];
    public products?: Product[];
    public customerEmail?:string;
    public customerAddress?: string; 
    public customerPhone?: string; 
    public items?: any[];
    public customerName?: string; 
    public date?: Date;
    public totalAmount?: number; 
    public status?: string;
}