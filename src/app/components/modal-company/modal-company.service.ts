import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalCompanyComponent } from "./modal-company.component";

@Injectable({
  providedIn: 'root'
})
export class ModalCompanyService {

  constructor(private modalService: NgbModal) {}

  showModal() {
    const modalRef = this.modalService.open(ModalCompanyComponent, {centered: true, scrollable: true, size: 'xl'});
    return modalRef.result;
  }
}
