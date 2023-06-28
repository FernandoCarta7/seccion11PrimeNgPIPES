import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'product-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})


export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero |undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      edad: 450,
      canFly: true,
      color: Color.blue
    },
    //Batman
    {
      name: 'Batman',
      edad: 45,
      canFly: false,
      color: Color.black
    },
    //Wonder Woman
    {
      name: 'Wonder Woman',
      edad: 350,
      canFly: true,
      color: Color.red
    },

    {
      name: 'Daredevil',
      edad: 38,
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      edad: 29,
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna Verde',
      edad: 333,
      canFly: true,
      color: Color.green
    }
  ]


  toogleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero) {
    this.orderBy = value;
  }
}
