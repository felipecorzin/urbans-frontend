import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-djurban',
  standalone: true,
  imports: [],
  templateUrl: './djurban.component.html',
  styleUrl: './djurban.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DjurbanComponent implements OnInit {

  ngOnInit(): void { }

}
