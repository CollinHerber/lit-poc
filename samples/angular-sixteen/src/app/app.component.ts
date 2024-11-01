import { Component } from '@angular/core';
//You can import all the components like this
import '@collin/lit-components';

//The library also exports the types for the components
import { NJC_COMBOBOX_OPTION } from '@collin/lit-components/dist/types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-sixteen';
    options: NJC_COMBOBOX_OPTION[] = [
        {
            label: 'Option 1',
            value: '1'
        },
        {
            label: 'Option 2',
            value: '2'
        },
        {
            label: 'Option 3',
            value: '3'
        }
    ];
}
