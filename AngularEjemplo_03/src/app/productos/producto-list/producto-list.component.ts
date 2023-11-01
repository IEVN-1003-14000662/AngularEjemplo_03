import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent {

    imageWidth:number=50;
    imageMargin:number=2;
    mustraIma:boolean=true;
    listFilter:string=''

    showImage():void{
        this.mustraIma=!this.mustraIma;
    }

  productos:IProductos[]=[
    
    {
      "Modelo":"sentra",
      "Descripcion": "4 puertas familiar",
      "Year" : "Febrero 02 2022",
      "Precio" : 120000,
      "Marca" : "Nisan",
      "Color" : "Azul",
      "ImagenUrl" : "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg" 
    }
    ,
    {
      "Modelo":"AA",
      "Descripcion": "4 puertas familiar",
      "Year" : "Marzo 02 2020",
      "Precio" : 180000,
      "Marca" : "Audi",
      "Color" : "Blanco",
      "ImagenUrl" : "https://vis.iaai.com/resizer?imageKeys=37823153~SID~B337~S0~I1~RW2592~H1944~TH0&width=400&height=300"
    }
    ,
    {
      "Modelo":"Crox Fox",
      "Descripcion": "4 puertas familiar",
      "Year" : "Abril 02 2018",
      "Precio" : 100000,
      "Marca" : "volkswagen",
      "Color" : "Roja",
      "ImagenUrl" : "https://img.remediosdigitales.com/4bf062/dsc_9433/450_1000.jpg" 
    }

  ]

}
