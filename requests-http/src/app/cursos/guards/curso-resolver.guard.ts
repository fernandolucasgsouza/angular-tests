import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso } from './../cursos-lista/curso';
import { CursoService } from '../curso.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {


  constructor(private service:CursoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> {

    if(route.params && route.params['id']){
      return this.service.getById(route.params['id'])
    }

    return of({
      id:null,
      title: null
    });
  }

}
