import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { ClarityIcons ,bookmarkIcon, colorPaletteIcon, digitalSignatureIcon, dollarIcon, gridViewIcon, helpInfoIcon, hourglassIcon, keyIcon, libraryIcon, plusIcon, rulerPencilIcon, treeViewIcon, userIcon, viewListIcon, volumeIcon,creditCardIcon,eCheckIcon ,walletIcon,wifiIcon, usersIcon, logoutIcon, accessibility2Icon, factoryIcon, coinBagIcon, devicesIcon, terminalIcon} from '@cds/core/icon';
import { FinanceModule } from './finance/finance.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { EmployerModule } from './employer/employer.module';







ClarityIcons.addIcons(userIcon,gridViewIcon,libraryIcon,dollarIcon,viewListIcon,plusIcon,rulerPencilIcon,treeViewIcon,volumeIcon,bookmarkIcon,colorPaletteIcon,digitalSignatureIcon,hourglassIcon,helpInfoIcon,keyIcon,creditCardIcon,eCheckIcon,walletIcon,wifiIcon,usersIcon,userIcon,logoutIcon,accessibility2Icon,factoryIcon,coinBagIcon,devicesIcon,terminalIcon)
@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,ClarityModule,BrowserAnimationsModule,ClrDatagridModule,HttpClientModule,UsersModule,
    AppRoutingModule,CoreModule,ReactiveFormsModule,FormsModule,ProductsModule,FinanceModule,AuthModule,RouterModule,EmployerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
