import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteListComponent } from './quote-list/quote-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-app';
}
