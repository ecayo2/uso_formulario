import { Component, OnInit } from '@angular/core';

export class DatosFormulario{
  constructor(
    public campo1: string,
    public campo2: string,
  ){}
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  datos_formulario;

  constructor() { 
    this.datos_formulario = new DatosFormulario("Ingrese dato 1","Ingrese dato 2")
  }

  ngOnInit() {
  }

  enviarDatos(){
    console.log("Los datos del formulario son: ", this.datos_formulario)
  }

}
