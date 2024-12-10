import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent implements OnInit {

  ngOnInit(): void { }

}
