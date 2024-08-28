import { Component, OnInit } from '@angular/core';
import { Founisseur } from 'src/app/founisseur/founisseur';
import { Buying, BuyingDetail } from '../buying';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { FinanceService } from 'src/app/finance/finance.service';
import { Payment } from 'src/app/finance/payment-method/payment';
import { Transaction } from 'src/app/finance/transaction/transaction';
import { ProductsService } from 'src/app/products/products.service';
import { Product, ProductDetail } from 'src/app/products/products/product';
import { FounisseurService } from 'src/app/founisseur/founisseur.service';
import { BuyingService } from '../buying.service';

@Component({
  selector: 'app-buying-update',
  templateUrl: './buying-update.component.html',
  styleUrls: ['./buying-update.component.css']
})
export class BuyingUpdateComponent implements OnInit{
  form: FormGroup;
  dataProvider=[]
  dataProduct=[]
  dataPayment=[]
  showModal: boolean=false; 
  show: boolean=false; 
  name: any;
  data:any
  number: any;
  somme:number=0
  
  selected: any[] = []; 
  disabled: boolean=false;
  provider: Founisseur = new Founisseur()
  Buying:Buying= new Buying()
  BuyingDetail:BuyingDetail= new BuyingDetail()
  product:Product=new Product()
  products:Product[]=[]
  transaction:Transaction=new Transaction()
  
  selectedProduct:BuyingDetail[]=[]
  selectedTransaction:Transaction[]=[]
  selectedPayment:Transaction[]=[]
 
  productDetail:ProductDetail= new ProductDetail()

  totalPriceHorsTax: number = 0;
  totalPriceTTC: number = 0;
  BuyingDetails: BuyingDetail[] = [];
  buyingDetail: BuyingDetail[] = [];
  payment:Payment=new Payment()
  id: number=0;
  
 Transactions:Transaction[]=[]
  resetAmount: number=-1;
  showModalDelete:boolean=false
  disabledProduct: boolean=false;
  disabledAmount: boolean=false;
  constructor(private formBuilder: FormBuilder, private route:ActivatedRoute,private fournisseurService:FounisseurService,private productsService:ProductsService,private financeService:FinanceService,private buyingService:BuyingService) {
    this.form = this.formBuilder.group({
 
      Provider: this.formBuilder.group({
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
      Buying: this.formBuilder.group({
        buyingName: [''],
       
      }),
    
      
    });
  }
  ngOnInit(): void {
    this.getProvider()
    this. getProduct() 
    this.getPayment()
    this.show=false;
    
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log("id ",this.id)
      this.getBuyingById(this.id)
    });
  
  }
  getBuyingById(id:number){
console.log("id",id)
    this.buyingService.getBuying(id).subscribe(data=>{
      console.log(data)
      this.provider= data.idProvider
      this.BuyingDetails=data.buyingDetails

      this.form.get('Product.detailQunatity')?.setValue(data.BuyingDetail[0].quantity);
      this.form.get('transaction.transactionPrice')?.setValue(data.montantTotal);
      this.transaction=data.transactions
      this.form.patchValue(data)
      
    })
  }
  
    
  closeAction(){
    this.show=false
  }
 
  openChange(open: any) {
  
    console.log("open",open)
    this.provider=open
  }
  getProvider(){
    this.fournisseurService.listFournisseur().subscribe(data=>{
      
      this.dataProvider=data[0]
      console.log("in get provider:",this.dataProvider)
   
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
    console.log("open:",open.model.id)
    this.BuyingDetails.map(x=>console.log("x:",x.productId?.id))
    if(this.BuyingDetails.findIndex(x=>x.productId?.id===open.model.id)!==-1)
    { 
      this.disabledProduct=true}
    else  
    {this.BuyingDetail.productId= open.model}
    const index = this.products.findIndex(product => product.id === open.model.id);
    if (index !== -1) {
      this.products[index] = open.model;
    } else {
     this.products.push(open.model);
    }
    
    this.product= open.model
    console.log(this.product.priceHorsTax);

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
    this.BuyingDetail.quantity = detailQuantity;
    this.BuyingDetail.amount=Number(this.BuyingDetail.productId?.priceTTC)*Number(this.BuyingDetail.quantity) 
    this.BuyingDetails.push(this.BuyingDetail);
    this.calculerSumTotaleProduct()
    this.resetAmount=this.somme
    this.BuyingDetail = new BuyingDetail();
    this.form?.get('Product')?.reset();
  }
  calculerSumTotaleProduct() {
    this.somme = this.BuyingDetails.filter(x => x.productId !== undefined).reduce((sum, x) => sum + Number(x.amount), 0);
}//deleteMultiple valider
  confirmDelete() {
    for (let i = 0; i < (this.selectedProduct).length ;i++) {
      const index = this.BuyingDetails.indexOf(this.selectedProduct[i]);
      if (index !== -1) {
        this.BuyingDetails.splice(index, 1); 
      }
    }
    this.showModal=false
  }

  getPayment(){
    this.financeService.getAllPayment().subscribe(data=>{
      this.dataPayment=data[0]
   
    })
   }

   paymentSelect(event:any){
    console.log(" list",this.selectedPayment.length)

   }
openChangePayment(open: any) {
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
  verifyAmountEntry(){
    if(this.form.value.transactionPrice>this.resetAmount)
    {this.disabledAmount=true}
  }
  verifierAmount(){
    let totaleTranaction=this.Transactions.filter(x => x.amount !== undefined)
    .reduce((sum, x) => sum + Number(x.amount), 0);
   
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
      let BuyingDetails = []
      BuyingDetails.push(this.BuyingDetail)   
      this.Buying.idProvider=this.provider
      this.Buying.buyingDetails=this.BuyingDetails
      this.Buying.transactions=this.Transactions
   

     console.log("this.Buying",this.Buying)
      this.buyingService.updateBuying(this.id,this.Buying).subscribe(
        data=>{console.log('data',data)
    
   this.show=true  
        } 
      )  }
}
