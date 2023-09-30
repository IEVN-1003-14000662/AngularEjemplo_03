import { Component } from '@angular/core';

@Component({
  selector: 'app-suma2',
  templateUrl: './suma2.component.html',
  styleUrls: ['./suma2.component.css']
})
export class Suma2Component {

  Num1 = 0;
  Num2 = 0;
  res = 0;

  sumar(){
    this.res=this.Num1+this.Num2
  }

}
