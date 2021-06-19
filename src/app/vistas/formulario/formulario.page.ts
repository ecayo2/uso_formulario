import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service'

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

  constructor( private formularioService: FormularioService ) { 
    this.datos_formulario = new DatosFormulario("Ingrese dato 1","Ingrese dato 2")
  }

  ngOnInit() {
  }

  enviarDatos(){

    this.formularioService.registrarFormulario(this.datos_formulario).subscribe(
      (response:any) => {
        if(response.registro){
          alert("Datos enviados")
          console.log(response.registro)
        }else{
          alert("Error en el envio")
        }
      },
      error =>{
        alert("Error en la peticion")
      }
    );

    //console.log("Los datos del formulario son: ", this.datos_formulario)
  }

}
