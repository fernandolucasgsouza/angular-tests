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

  private showAlert(message: string, type: AlertTypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string = 'Erro ao concectar ao servidor...') {
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message: string = 'Execução concluída com sucesso!') {
    this.showAlert(message, AlertTypes.SUCCESS, 3000)
  }

  showAlertPrimary(message: string) {
    this.showAlert(message, AlertTypes.PRIMARY, 3000)
  }

  showAlertWarning(message: string) {
    this.showAlert(message, AlertTypes.WARNING)
  }

  showAlertInfo(message: string) {
    this.showAlert(message, AlertTypes.INFO, 3000)
  }

  showAlertLight(message: string) {
    this.showAlert(message, AlertTypes.LIGHT, 3000)
  }

  showAlertDark(message: string) {
    this.showAlert(message, AlertTypes.DARK, 3000)
  }
}
