import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-contacta',
  standalone: true,
  imports: [],
  templateUrl: './contacta.component.html',
  styleUrl: './contacta.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactaComponent implements OnInit {

  ngOnInit(): void { }

}
