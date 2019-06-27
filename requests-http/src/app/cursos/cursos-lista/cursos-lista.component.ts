import { AlertModalService } from './../../shared/alert-modal.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  modalRef: BsModalRef;
  cursos$: Observable<Curso[]>;

  @ViewChild('deleteModal') deleteModal: Curso;
  cursoSelected: Curso;
  constructor(
    private service: CursoService,
    private alertService: AlertModalService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    // this.service.list().subscribe(dados => this.cursos = dados);
    this.cursos$ = this.service.list();
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

  onDelete(curso) {
    this.cursoSelected = curso
    // this.modalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
    this.alertService.showConfirm('Confirmação', 'Você tem certeza que deseja remover o curso?', 'Sim', 'Não')
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelected.id).subscribe(
      sucess => {
        this.alertService.showAlertSuccess();
        this.onRefresh();
        this.onDecline();
      },
      error => {
        this.onDecline();
        this.alertService.showAlertDanger()
      },
    );
  }

  onDecline() {
    this.modalRef.hide();
  }
}
