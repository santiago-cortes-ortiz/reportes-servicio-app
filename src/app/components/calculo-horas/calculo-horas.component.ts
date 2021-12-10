import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/interface/respuesta';
import { ReporteService } from 'src/app/service/reporte.service';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-calculo-horas',
  templateUrl: './calculo-horas.component.html',
  styleUrls: ['./calculo-horas.component.css']
})
export class CalculoHorasComponent implements OnInit {

  respuesta : Respuesta
  error: HttpErrorResponse

  constructor(private _servicioReporte: ReporteService) { }

  ngOnInit(): void {
  }

  calcularHoras(formulario: NgForm){
    let idTecnico = formulario.value.idTecnico;
    let numeroSemana = formulario.value.numeroSemana;
    this._servicioReporte.calcularHoras(idTecnico,numeroSemana).subscribe(
      {
        next: (response: Respuesta) => {
          console.log(response);this.respuesta = response;formulario.reset();
        },
        error: (error: HttpErrorResponse) =>{console.error(error); this.error = error; formulario.reset();}
      }
    )
  }

}
