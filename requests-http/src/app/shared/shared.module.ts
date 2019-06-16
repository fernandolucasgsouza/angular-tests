import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModalComponent,
  ],
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
