import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';

import { ViewportSizeDirective } from './directives/viewportSize/viewportSize.directive';

export interface IConfig {
  medium: number;
  large: number;
}

export const CONFIG: IConfig = {
  medium: 320,
  large: 720
}

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, ViewportSizeDirective ],
  bootstrap:    [ AppComponent ],
})
export class AppModule {

}
