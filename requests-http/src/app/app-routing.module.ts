import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import { NotFoundComponent } from './page-not-found/not-found.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cursos'
  },
  {
    path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  },
  {
    path: 'key-value',
    loadChildren: './key-value/key-value.module#KeyValueModule'
  },
  {
    path: 'url-invalida',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      malformedUriErrorHandler:
        (error: URIError, urlSerializer: UrlSerializer, url: string) => {
          // console.log(error);
          console.log(url);
          return urlSerializer.parse('/url-invalida');
        }
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
