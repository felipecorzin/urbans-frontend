import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-robotica',
  standalone: true,
  imports: [],
  templateUrl: './robotica.component.html',
  styleUrl: './robotica.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoboticaComponent implements OnInit {

  ngOnInit(): void { }

}
