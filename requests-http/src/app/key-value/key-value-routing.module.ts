import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyValueComponent } from './components/key-value.component';

const routes: Routes = [
  { path: '', component: KeyValueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyValueRoutingModule { }
