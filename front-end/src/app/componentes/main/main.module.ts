import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { routing } from 'src/app/app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FlexLayoutModule,
  ],
  exports: [
    MainComponent
  ],
})
export class MainModule { }
