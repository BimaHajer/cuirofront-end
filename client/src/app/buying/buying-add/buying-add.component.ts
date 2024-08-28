import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Founisseur } from 'src/app/founisseur/founisseur';
import { Buying, BuyingDetail } from '../buying';
import { FounisseurService } from 'src/app/founisseur/founisseur.service';
import { ProductsService } from 'src/app/products/products.service';
import { Transaction } from 'src/app/finance/transaction/transaction';
import { Product, ProductDetail } from 'src/app/products/products/product';
import { BuyingService } from '../buying.service';
import { Payment } from 'src/app/finance/payment-method/payment';
import { FinanceService } from 'src/app/finance/finance.service';

@Component({
  selector: 'app-buying-add',
  templateUrl: './buying-add.component.html',
  styleUrls: ['./buying-add.component.css']
})
export class BuyingAddComponent implements OnInit {
  
  form: FormGroup;
  dataProvider=[]
  dataProduct=[]
  dataPayment=[]
  name:any;
  data:any

  selected: any[] = []; 
  disabled: boolean=false;
  provider: Founisseur = new Founisseur()
  buying:Buying= new Buying()
  buyingDetail:BuyingDetail= new BuyingDetail()

  product:Product=new Product()
  products:Product[]=[]
  selectedProduct:BuyingDetail[]=[]
  selectedTransaction:Transaction[]=[]
  selectedPayment:Transaction[]=[]
 
  productDetail:ProductDetail= new ProductDetail()

  transaction:Transaction=new Transaction()

  totalPriceHorsTax: number = 0;
  totalPriceTTC: number = 0;
  buyingDetails: BuyingDetail[] = [];
  BuyingDetail: BuyingDetail[] = [];
  payment:Payment=new Payment()
 
  resetAmount: number=-1;
  somme:number=0

  showProductModal: boolean=false;
  showModalDelete:boolean=false
  show: boolean=true;
  Transactions:Transaction[]=[]

  constructor(private formBuilder: FormBuilder,private providerService:FounisseurService,private productsService:ProductsService,private buyingService:BuyingService, private financeService:FinanceService) {
    this.form = this.formBuilder.group({

      provider: this.formBuilder.group({
       name:[''],
      }),
       Product: this.formBuilder.group({
        productName: [''],
        detailQunatity: [''],
        totalMontant:['']
      }),
      transaction: this.formBuilder.group({
        transactionName: [''],
        total:[''],
        facilitatedBy:[''],
        transactionPrice:['']
      }),
      buying: this.formBuilder.group({
        buyingName: [''],
       
      }),
       
      });
      
    
      
    
  }
  ngOnInit(): void {
    this.getProvider()
    this. getProduct() 
    this.show=false;

    this.getPayment()
    this.show=false;

    
  }
  
    
  closeAction(){
    this.show=false
  }
 
  openChange(open: any) {
  
    this.provider= open.model

  }
  getProvider(){
  this.providerService.listFournisseur().subscribe(data=>{
      this.dataProvider=data[0]
   
    })
    
   }
  
   getProduct(){
    this.productsService.getAllProducts().subscribe(data=>{
      
      this.dataProduct=data[0]
    })
   }
   productSelect(event:any){
    console.log(" list",this.selectedProduct.length)
    this.selectedProduct = event;
   
  }

  openChangeProduct(open: any) {
    this. totalPriceHorsTax = 0;
     this. totalPriceTTC = 0;
     this.buyingDetail.productId= open.model
     const index = this.products.findIndex(product => product.id === open.model.id);
     if (index !== -1) {
       this.products[index] = open.model;
     } else {
      this.products.push(open.model);
     }
     
     this.product= open.model
    
 
     this.product.priceHorsTax=Number(this.product.priceHorsTax)
   
     this.form.get('this.product')?.setValue( this.product.priceHorsTax);
     this.form.get('this.product')?.setValue( this.product.priceTTC);
    
 
     for (const product of this.products) {
       // Vérifiez si priceHorsTax et priceTTC sont définis et sont des nombres
       if (typeof product.priceHorsTax === 'number' && typeof product.priceTTC === 'number') {
           // Ajoutez les valeurs de priceHorsTax et priceTTC aux sommes totales
          this. totalPriceHorsTax += product.priceHorsTax;
          this. totalPriceTTC += product.priceTTC;
       }
       
       
   }
 
     this.form.patchValue({
       
       Product: {
       
         detailQunatity: ''
       }
     }); 
   }
    
   //valide Function add product
   AddProductCommande(){
     const detailQuantity = this.form.value?.Product?.detailQunatity;
     this.buyingDetail.quantity = detailQuantity;
     this.buyingDetail.amount=Number(this.buyingDetail.productId?.priceTTC)*Number(this.buyingDetail.quantity) 
     this.buyingDetails.push(this.buyingDetail);
     this.calculerSumTotaleProduct()
     this.resetAmount=this.somme
     this.buyingDetail = new BuyingDetail();
     this.form?.get('Product')?.reset();
   }
   calculerSumTotaleProduct() {
     this.somme = this.buyingDetails.filter(x => x.productId !== undefined).reduce((sum, x) => sum + Number(x.amount), 0);
 }//deleteMultiple valider
   confirmDelete() {
     for (let i = 0; i < (this.selectedProduct).length ;i++) {
       const index = this.buyingDetails.indexOf(this.selectedProduct[i]);
       if (index !== -1) {
         this.buyingDetails.splice(index, 1); 
       }
     }
     this.showProductModal=true;
   }
 
   getPayment(){
     this.financeService.getAllPayment().subscribe(data=>{
       this.dataPayment=data[0]
    
     })
    }
 
    paymentSelect(event:any){
     console.log(" list",this.selectedPayment.length)
 
    }
 openChangePayment(open: any) 
 {
     this.payment = open.model;
    this. updateTransactionPrice()
   
    } 
    AddTransactionCommande(){
     this.transaction.payementId = this.payment;
     this.transaction.amount=Number(this.form.get('transaction.transactionPrice')?.value)
     this.Transactions.push(this.transaction);
     this.transaction=new Transaction()
     this.verifierAmount()
    this.form?.get('transaction')?.reset();
   }
   
    updateTransactionPrice() {
     const selectedOption = this.form.get('transaction.total')?.value;
     if (selectedOption === 'option1') {
       
       this.form.get('transaction.transactionPrice')?.setValue(this.somme);
     }
     else {
 
       this.form.get('transaction.transactionPrice')?.setValue("null");
     }
     
   }
  
   verifierAmount(){
     let totaleTranaction=this.Transactions.filter(x => x.amount !== undefined) .reduce((sum, x) => sum + Number(x.amount), 0);
     this.buying.total_price=totaleTranaction
     this.resetAmount=this.somme-totaleTranaction
   }
    
   
    confirmDeleteTransaction() {
     for (let i = 0; i < this.selectedPayment.length; i++) {
       const index = this.Transactions.indexOf(this.selectedPayment[i]);
       if (index !== -1) {
         this.Transactions.splice(index, 1); 
       }
     }
     this.showModalDelete=false
    }
   
 
   submit(){ 
  
      
      let buyingDetail = []
      buyingDetail.push(this.buyingDetail)
      this.buying.idProvider=this.provider
      this.buying.buyingDetails=this.buyingDetails
      this.buying.transactions=this.Transactions
      

     console.log("this.buying",this.buying)
      this.buyingService.addBuying(this.buying).subscribe(
        data=>{console.log('data',data)
    
   this.show=true  
        } 
      )  }
      reset(){
        this.selected= []; 
        this.disabled=false;
        this.provider = new Founisseur()
        this.buying= new Buying()
       this.buyingDetail= new BuyingDetail()
       this.product=new Product()
  
        this.transaction=new Transaction()
        this.form.reset()
        this.show=false
      }

 }
