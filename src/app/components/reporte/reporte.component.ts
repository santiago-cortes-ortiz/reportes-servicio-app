import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, catchError, map, Observable, of, startWith } from 'rxjs';
import { Reporte } from 'src/app/interface/reporte';
import { Respuesta } from 'src/app/interface/respuesta';
import { ReporteService } from 'src/app/service/reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  respuesta: Respuesta

  constructor(
    private _servicioReporte: ReporteService
  ) { console.log("hola reporte")
    
    } 

  ngOnInit(): void {
  }

  hacerReporte(formularioReporte: NgForm){
    console.log('agregando reporte...', formularioReporte.value);
      this._servicioReporte.hacerReporte(formularioReporte.value).subscribe({
        next: (response: Respuesta) => {
          console.log(response);this.respuesta = response;formularioReporte.reset();
        },
        error: (error: HttpErrorResponse) =>{console.error(error); formularioReporte.reset();}
      }
    );
  }


}
