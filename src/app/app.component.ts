import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormSearchCepComponent } from './form-search-cep/form-search-cep.component'; // Caminho correto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormSearchCepComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio-angular';
}
