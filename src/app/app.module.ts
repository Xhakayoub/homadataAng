import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CallFunctionService } from './call-function.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
     
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CallFunctionService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
