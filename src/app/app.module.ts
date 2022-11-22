import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DisableAfterClickDirective } from './disable-after-click.directive';
import { RadialMenuDirective } from './radial-menu.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, DisableAfterClickDirective, RadialMenuDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
