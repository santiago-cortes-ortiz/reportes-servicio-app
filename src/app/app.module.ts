import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { HomeComponent } from './components/home/home.component';
//client http
import { HttpClientModule } from '@angular/common/http';
//routing
import { APP_ROUTING } from './app.routes';
//forms
import { FormsModule } from '@angular/forms';
import { ReporteService } from './service/reporte.service';
import { CalculoHorasComponent } from './components/calculo-horas/calculo-horas.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReporteComponent,
    HomeComponent,
    CalculoHorasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReporteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
