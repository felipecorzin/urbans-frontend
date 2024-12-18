import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DjurbanComponent } from './pages/djurban/djurban.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { CountryComponent } from './pages/country/country.component';
import { RoboticaComponent } from './pages/robotica/robotica.component';
import { ActividadComponent } from './pages/actividad/actividad.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'djurban', component: DjurbanComponent },
  { path: 'country', component: CountryComponent },
  { path: 'robotica', component: RoboticaComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'actividad/:id', component: ActividadComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
