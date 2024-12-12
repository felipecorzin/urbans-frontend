import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AcitividadesService } from '../../services/acitividades.service';
import { Actividad } from '../../interfaces/actividades.interface';


@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActividadesComponent implements OnInit {

  actividades: Actividad[] = [];
  public router             = inject(Router);
  public actividadesService = inject(AcitividadesService);

  ngOnInit(): void {
    this.loadActividades()
  }

  loadActividades() {
    this.actividades = this.actividadesService.getActividades();
    console.log(this.actividades);
  }

  seeMinion(id: number) {
    this.router.navigate(['/actividad', id]);
  }

}

