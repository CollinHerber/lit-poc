import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentLibraryModule } from '../../../component-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentLibraryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}
