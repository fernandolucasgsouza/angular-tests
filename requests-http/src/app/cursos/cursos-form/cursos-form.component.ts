import { AlertModalService } from './../../shared/alert-modal.service';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private service: CursoService,
    private serviceAlert: AlertModalService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const curso = this.route.snapshot.data['curso'];
    this.form = this.fb.group({
      id: [curso.id],
      title: [curso.title, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {

    this.submitted = true;
    if (this.form.valid) {

      let msgSuccess = 'Curso criado com sucesso!';
      let msgError = 'Erro ao criar o curso. tente novamente mais tarde!';
      if (this.form.value.id) {
        msgSuccess = 'Curso atualizado com sucesso!';
        msgError = 'Erro ao atualizar o curso, tente novamente mais tarde!';
      };

      this.service.save(this.form.value).subscribe(
          sucess => {
            this.serviceAlert.showAlertSuccess(msgSuccess)
            this.location.back();
          },
          error => this.serviceAlert.showAlertDanger(msgError),
        );

    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
