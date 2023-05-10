import { CepService } from './../../services/cep.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, switchMap } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-modal-company',
  templateUrl: './modal-company.component.html',
  styleUrls: ['./modal-company.component.scss'],
})
export class ModalCompanyComponent implements OnInit {
  companyForm!: FormGroup;
  CPF_REGEX = '[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}';
  CNPJ_REGEX = '[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}';
  address: any;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private cepService: CepService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.companyForm = this.formBuilder.group({
      companyType: ['', []],
      companyName: ['', [Validators.required]],
      companyCNPJ: [
        '',
        [Validators.required, Validators.pattern(this.CNPJ_REGEX)],
      ],
      companyCEP: ['', []],
      companyAddress: ['', []],
      companyNeighborhood: ['', []],
      companyState: ['', []],
      companyCity: ['', []],
      companyPhone: ['', [Validators.required]],
      companyAdm: ['', [Validators.required]],
      companyCPF: [
        '',
        [Validators.required, Validators.pattern(this.CPF_REGEX)],
      ],
      companyEmail: ['', [Validators.required, Validators.email]],
    });
  }

  confirm(): void {
    let user = this.authService.getUserLogged();
    console.log(user);

    if (user) {
      user.company = this.companyForm.getRawValue();
      localStorage.setItem('userLogged', JSON.stringify(user));
    }

    this.activeModal.close('confirm');
    this.router.navigate(['company']);
  }

  cancel(): void {
    this.activeModal.close('cancel');
  }

  findCEP() {
    if (this.validaCEP()) {
      const value = this.companyForm.get('companyCEP')?.value;
      this.cepService.getCEP(value).subscribe({
        next: (res) => {
          this.fetchAddress(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  validaCEP() {
    return this.companyForm.get('companyCEP')?.valid;
  }

  fetchAddress(address: any) {
    this.companyForm.get('companyAddress')?.setValue(address.logradouro);
    this.companyForm.get('companyState')?.setValue(address.uf);
    this.companyForm.get('companyCity')?.setValue(address.localidade);
    this.companyForm.get('companyNeighborhood')?.setValue(address.bairro);
  }
}
