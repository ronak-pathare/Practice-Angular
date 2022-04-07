import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MyToastrService {
  constructor(private toast: ToastrService) {}

  success(message: string, title?: string) {
    this.toast.success(message, title);
  }

  info(message: string, title?: string) {
    this.toast.info(message, title);
  }

  warning(message: string, title?: string) {
    this.toast.warning(message, title);
  }

  error(message: string, title?: string) {
    this.toast.error(message, title);
  }
}
