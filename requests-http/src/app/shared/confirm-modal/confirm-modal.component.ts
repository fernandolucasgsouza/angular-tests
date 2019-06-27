import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() cancelText = 'Cancelar';
  @Input() confirmText = 'Confirmar';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  onConfirm() {

  }

  onClose() {
    this.bsModalRef.hide();
  }

}
