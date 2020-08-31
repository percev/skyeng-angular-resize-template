import { Component } from '@angular/core';
import { watchViewportSize } from './services/watchViewportSize/watchViewportSize.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ watchViewportSize, { provide: 'windowObject', useValue: window} ]
})
export class AppComponent  {
  constructor(){}
}
