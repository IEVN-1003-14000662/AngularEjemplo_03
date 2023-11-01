import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-datos-alumno',
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.css']
})
export class DatosAlumnoComponent implements OnInit {

  alumnos!:FormGroup;

  ngOnInit(): void {
    this.alumnos = new FormGroup({
      matricula: new FormControl(''),
      nombre : new FormControl (''),
      apaterno : new FormControl (''),
      amaterno : new FormControl (''),
      correo : new FormControl (''),
    });

  }
}
