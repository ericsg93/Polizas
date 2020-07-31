import { UserService } from './../../_services/user.service';
import { PolizaService } from './../../_services/poliza.service';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { AlertifyService } from '../../_services/alertify.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Poliza } from '../../_models/poliza';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-polizas-create',
  templateUrl: './polizas-create.component.html',
  styleUrls: ['./polizas-create.component.css'],
})
export class PolizasCreateComponent implements OnInit {
  poliza: Poliza;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  users: User[];

  constructor(
    private polizaService: PolizaService,
    private alertService: AlertifyService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cobertura: ['', Validators.required],
      vigencia: [null, Validators.required],
      periodoMeses: ['', Validators.required],
      precio: ['', Validators.required],
      tipoRiesgo: ['', Validators.required],
      userId: ['', Validators.required],
    });

    this.loadUsers();
  }

  // Validation errors

  isInvalid(c: string): boolean {
    return (
      this.registerForm.get(c).hasError('required') &&
      this.registerForm.get(c).touched
    );
  }

  register() {
    if (this.registerForm.valid) {
      this.poliza = Object.assign({}, this.registerForm.value);

      console.log(this.poliza);
      this.polizaService.postPoliza(this.poliza).subscribe(
        (res) => {
          this.alertService.success('Poliza creada con exito');
        },
        (error) => {
          this.alertService.error(
            'No se pudo completar la creación de la poliza'
          );
          console.log(error);
        },
        () => {
          //metodo para cuando se completa el success
          this.router.navigate(['/polizas']);
        }
      );
    }
  }

  loadUsers() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
