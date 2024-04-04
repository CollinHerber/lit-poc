import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentLibraryModule } from '../../../component-library/src/public-api';
import '../../../../../lit-components/src/web-components/card-user/card-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentLibraryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'my-app';
}
