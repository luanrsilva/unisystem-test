import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCompanyComponent } from './modal-company.component';
import { MessageModule } from "../message/message.module";

@NgModule({
    declarations: [ModalCompanyComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        MessageModule
    ]
})
export class ModalCompanyModule { }
