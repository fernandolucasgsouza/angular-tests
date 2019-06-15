import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from './curso';
import { Observable, Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[];
  cursos$: Observable<Curso[]>;

  constructor(private service: CursoService) { }

  ngOnInit() {
    // this.service.list().subscribe(dados => this.cursos = dados);
    this.cursos$ = this.service.list();
  }


}
