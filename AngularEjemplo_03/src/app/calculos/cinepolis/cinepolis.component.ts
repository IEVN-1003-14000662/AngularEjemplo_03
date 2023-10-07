import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { bufferToggle } from 'rxjs';
import { ActivationEnd } from '@angular/router';


@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],
})
export class CinepolisComponent {

  nombre="";
  personas = 0;
  CBoletos = 0;
  precioB = 12;
  pagar = 0;
  precioFinal = 0;
  tarjetaCineCoxd = '';
  BoletosPermitidos = 0;
  mensaje = '';

  operacion(): void {
    const precioSinDescuento: number = this.CBoletos * this.precioB;

    let descuento: number = 0;
    this.BoletosPermitidos = this.CBoletos / this.personas;

    if (this.BoletosPermitidos <= 7){
        if (this.CBoletos > 5){
          descuento = precioSinDescuento * 0.15; // 15% de descuento
        }
        else if (this.CBoletos >= 3 && this.CBoletos <= 5){
          descuento = precioSinDescuento * 0.10; // 10% de descuento
        //Precio a pagar sin descuento por menos de 2 boletos
        }
        else if (this.CBoletos <= 2){
          precioSinDescuento;
        }
        // Aplicar el descuento de la tarjeta de cineco si corresponde
        if (this.tarjetaCineCoxd == 'true'){
          descuento += precioSinDescuento * 0.10; // 10% de descuento adicional
        }
        // Calcular el precio final después de aplicar los descuentos
    this.precioFinal = precioSinDescuento - descuento;
      } 
      else
      {
        this.mensaje='No puedes comprar mas boletos';
      }
  }

  limpiar(){
    
    this.mensaje=" ";

}

}
