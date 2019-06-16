import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

@NgModule({
  declarations: [CursosListaComponent, CursosFormComponent],
  imports: [
    SharedModule,
    CursosRoutingModule
  ],
})
export class CursosModule { }
