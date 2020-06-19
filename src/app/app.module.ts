import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AKDataService} from "./services/ak-data.service";
import { ShopAKComponent } from './components/shop-ak/shop-ak.component';
import { ShopItemAKComponent } from './components/shop-item-ak/shop-item-ak.component';
import { ShopDetailsAKComponent } from './components/shop-details-ak/shop-details-ak.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopAKComponent,
    ShopItemAKComponent,
    ShopDetailsAKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  AKDataService,
  bootstrap: [AppComponent]
})
export class AppModule { }
