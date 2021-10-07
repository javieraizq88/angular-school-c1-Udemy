import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HelloComponent } from "./hello/hello.component";
import { FormsModule } from '@angular/forms';
import { UpperCapiitalPipe } from "./hello/upper-capital.pipe";
import { LoggerService } from './logger.service';

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
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
