import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  backend = environment.servidor+"/registroForm";

  constructor( private http: HttpClient ) { }

  registrarFormulario(datos_formularios){
    return this.http.post(`${this.backend}/crear-registro`,datos_formularios)
  }

}
