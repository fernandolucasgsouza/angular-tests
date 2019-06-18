import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from './curso';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[];
  cursos$: Observable<Curso[]>;

  constructor(
    private service: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.service.list().subscribe(dados => this.cursos = dados);
    this.cursos$ = this.service.list();
  }

  onEdit(id) {

    this.router.navigate(['editar', id], { relativeTo: this.route })
  }
}
