import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyValueRoutingModule } from './key-value-routing.module';
import { KeyValueComponent } from './components/key-value.component';

@NgModule({
  declarations: [KeyValueComponent],
  imports: [
    CommonModule,
    KeyValueRoutingModule
  ]
})
export class KeyValueModule { }
