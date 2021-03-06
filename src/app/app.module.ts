import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HelloComponent } from "./hello/hello.component";
import { FormsModule } from '@angular/forms';
import { UpperCapiitalPipe } from "./hello/upper-capital.pipe";
import { GreetingsService } from './greetings.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UpperCapiitalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ GreetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
