import { AlertModalService } from './../../shared/alert-modal.service';
import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

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
    private serviceAlert: AlertModalService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
  
  onSubmit() {
    this.submitted = true
    this.service.create(this.form.value).subscribe(
      sucess => {
        this.serviceAlert.showAlertSuccess()
        this.location.back();
      },
      error => this.serviceAlert.showAlertDanger('Erro ao criar o curso. tente novamente mais tarde!'),
    );

    if (this.form.valid) {
      console.log('submit');

    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

}
