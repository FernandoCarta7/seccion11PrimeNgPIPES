import { PrimeNgModule, } from '../prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuComponent } from './components/menu/menu.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,

  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
