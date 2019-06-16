import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

export enum AlertTypes {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark'
}
@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: AlertTypes) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: string = 'Erro ao concectar ao servidor...') {
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS)
  }

  showAlertPrimary(message: string) {
    this.showAlert(message, AlertTypes.PRIMARY)
  }

  showAlertWarning(message: string) {
    this.showAlert(message, AlertTypes.WARNING)
  }

  showAlertInfo(message: string) {
    this.showAlert(message, AlertTypes.INFO)
  }

  showAlertLight(message: string) {
    this.showAlert(message, AlertTypes.LIGHT)
  }

  showAlertDark(message: string) {
    this.showAlert(message, AlertTypes.DARK)
  }
}
