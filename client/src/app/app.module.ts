import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ClarityModule, ClrDatagridModule } from '@clr/angular'
import { ProductsModule } from './products/products.module';
import { FinanceModule } from './finance/finance.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthGuard } from './auth/auth.guard';
import '@cds/core/icon/register.js';
import { ClarityIcons, bookmarkIcon, colorPaletteIcon, digitalSignatureIcon, dollarIcon, gridViewIcon, helpInfoIcon, hourglassIcon, keyIcon, libraryIcon, plusIcon, rulerPencilIcon, treeViewIcon, userIcon, viewListIcon, volumeIcon, creditCardIcon, eCheckIcon, walletIcon, wifiIcon, usersIcon, logoutIcon, accessibility2Icon, factoryIcon, coinBagIcon, devicesIcon, terminalIcon } from '@cds/core/icon';


ClarityIcons.addIcons(
  userIcon, gridViewIcon, libraryIcon, dollarIcon, viewListIcon, plusIcon, rulerPencilIcon,
  treeViewIcon, volumeIcon, bookmarkIcon, colorPaletteIcon, digitalSignatureIcon, hourglassIcon,
  helpInfoIcon, keyIcon, creditCardIcon, eCheckIcon, walletIcon, wifiIcon, usersIcon, logoutIcon,
  accessibility2Icon, factoryIcon, coinBagIcon, devicesIcon, terminalIcon
);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, ClarityModule,
    ClrDatagridModule,
    HttpClientModule,AppRoutingModule,
    CoreModule,ReactiveFormsModule,FormsModule,
    ProductsModule,
    FinanceModule,AuthModule,
    UsersModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
