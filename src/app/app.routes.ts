import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ReporteComponent } from "./components/reporte/reporte.component";
const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reporte', component: ReporteComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
  ];
export const APP_ROUTING = RouterModule.forRoot(ROUTES);
