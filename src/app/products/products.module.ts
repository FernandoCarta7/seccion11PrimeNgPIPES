import { CanFlyPipe } from './pipes/canFly.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { ToggleCasPipe } from './pipes/toggle-case.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { SortByPipe } from './pipes/sort-by.pipe';



@NgModule({
  declarations: [
    UncommonPageComponent,
    ToggleCasPipe,
    OrderComponent,
    NumbersPageComponent,
    CanFlyPipe,
    BasicsPageComponent,
    SortByPipe,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,

  ]
})
export class ProductsModule { }
