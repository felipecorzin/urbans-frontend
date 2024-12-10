import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActividadesComponent implements OnInit {

  ngOnInit(): void { }

}
