import { TabViewModule } from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
//import { MenuModule } from 'primeng/menu';
@NgModule({
  exports:[
    //MenuModule,
    TabViewModule,
    SplitterModule,
    PanelModule,
    MenubarModule,
    FieldsetModule,
    CardModule,
    ButtonModule,
    AccordionModule,

  ]
})
export class PrimeNgModule { }
