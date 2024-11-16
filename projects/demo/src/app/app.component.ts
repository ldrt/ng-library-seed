import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibraryComponent } from 'library';

@Component({
  selector: 'drt-root',
  standalone: true,
  imports: [RouterOutlet, LibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
}
