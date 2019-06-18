import { AlertModalService } from './../shared/alert-modal.service';
import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './cursos-lista/curso';
import { tap, delay, catchError, take } from "rxjs/operators";
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
          this.handleError();
          return empty()
        })
      );
  }

  getById(id) {
    return this.http.get<Curso>(`${this.API}/${id}`)
      .pipe(
        take(1),
        catchError(error => {
          this.handleError(error.Messge);
          return empty()
        })
      );
  }
  create(curso) {
    return this.http.post(this.API, curso)
      .pipe(
        take(1),
        catchError(error => {
          console.error(error);
          this.handleError();
          return empty()
        })
      );
  }
  private handleError(message?: string) {
    this.alertService.showAlertDanger(message)
  }

}
