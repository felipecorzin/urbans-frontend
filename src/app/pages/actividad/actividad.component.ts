import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { AcitividadesService } from '../../services/acitividades.service';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActividadComponent implements OnInit {

  actividad: any = {};
  public route  = inject(ActivatedRoute);
  public actividadesService = inject(AcitividadesService);
  ngOnInit(): void {
    this.loadActividad();
  }

  loadActividad() {
    this.route.params.subscribe( params => {
      this.actividad = this.actividadesService.getActividad(params['id']);
      console.log(params['id']);
    })
  }

}
