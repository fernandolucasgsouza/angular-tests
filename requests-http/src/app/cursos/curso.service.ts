import { AlertModalService } from './../shared/alert-modal.service';
import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './cursos-lista/curso';
import { tap, delay, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { empty, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = `${environment.API}cursos`;
  private error$ = new Subject<boolean>();


  constructor(
    private http: HttpClient,
    private alertService: AlertModalService
  ) { }

  list() {
    return this.http.get<Curso[]>(this.API)
      .pipe(
        delay(2000), // atrasar processo para teste
        tap(console.log),
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          this.alertService.showAlertDanger()
          return empty()
        })
      );
  }


}
