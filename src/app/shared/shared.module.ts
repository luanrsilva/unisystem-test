import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from '../components/message/message.module';
import { ModalCompanyModule } from '../components/modal-company/modal-company.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MessageModule, ModalCompanyModule
  ],
  exports: [MessageModule]
})
export class SharedModule { }
