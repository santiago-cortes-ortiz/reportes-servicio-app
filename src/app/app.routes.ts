import { RouterModule, Routes } from "@angular/router";
import { CalculoHorasComponent } from "./components/calculo-horas/calculo-horas.component";
import { HomeComponent } from "./components/home/home.component";
import { ReporteComponent } from "./components/reporte/reporte.component";
const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reporte', component: ReporteComponent },
    {path: 'calculo', component: CalculoHorasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
  ];
export const APP_ROUTING = RouterModule.forRoot(ROUTES);
