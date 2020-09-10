import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import {FormsModule} from '@angular/forms';
import { InstructionsAndInputComponent } from './instructions-and-input/instructions-and-input.component';
import { MixtapeComponent } from './mixtape/mixtape.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    InstructionsAndInputComponent,
    MixtapeComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
