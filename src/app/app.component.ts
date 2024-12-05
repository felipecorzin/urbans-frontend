import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactaComponent } from './components/contacta/contacta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContactaComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'urbans-frontend';
}
