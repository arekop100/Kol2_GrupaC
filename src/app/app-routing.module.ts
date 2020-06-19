import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopAKComponent} from "./components/shop-ak/shop-ak.component";
import {ShopItemAKComponent} from "./components/shop-item-ak/shop-item-ak.component";
import {ShopDetailsAKComponent} from "./components/shop-details-ak/shop-details-ak.component";


const routes: Routes = [
  {
    path: '',
    component: ShopAKComponent
  },
  {
    path: 'Shop_item',
    component: ShopItemAKComponent
  },
  {
    path: 'Shop_detail',
    component: ShopDetailsAKComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
