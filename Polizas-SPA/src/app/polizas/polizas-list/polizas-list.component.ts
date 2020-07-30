import { PolizaService } from './../../_services/poliza.service';
import { Poliza } from './../../_models/poliza';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-polizas-list',
  templateUrl: './polizas-list.component.html',
  styleUrls: ['./polizas-list.component.css'],
})
export class PolizasListComponent implements OnInit {
  polizas: Poliza[];

  constructor(
    private polizaService: PolizaService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      this.polizas = res['polizas'];
    });
  }

  deletePoliza(id: number) {
    this.polizaService.deletePoliza(id).subscribe(
      (res) => {
        this.alertify.success('Poliza eliminada con exito');
        this.router.navigate(['/polizas']);
      },
      (error) => {
        this.alertify.error('La poliza no pudo ser eliminada');
      },
      () => {
        window.location.reload();
      }
    );
  }
}
