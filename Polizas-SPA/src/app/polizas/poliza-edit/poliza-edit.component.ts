import { Poliza } from './../../_models/poliza';
import { Component, OnInit } from '@angular/core';
import { PolizaService } from './../../_services/poliza.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poliza-edit',
  templateUrl: './poliza-edit.component.html',
  styleUrls: ['./poliza-edit.component.css'],
})
export class PolizaEditComponent implements OnInit {
  poliza: Poliza;

  constructor(
    private polizaService: PolizaService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      this.poliza = res['poliza'];
      console.log(this.poliza);
    });
  }

  updatePoliza() {
    this.polizaService.updatePoliza(this.poliza.id, this.poliza).subscribe(
      (res) => {
        this.alertify.success('Poliza actualizada');
      },
      (error) => {
        this.alertify.error('Poliza no pudo ser actualizada');
      },
      () => {
        this.router.navigate(['/polizas']);
      }
    );
  }
}
