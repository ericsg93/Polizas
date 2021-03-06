import { PolizaService } from './../_services/poliza.service';
import { Poliza } from './../_models/poliza';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class PolizaEditResolver implements Resolve<Poliza[]> {
  model: any;

  constructor(
    private polizaService: PolizaService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Poliza[]> {
    return this.polizaService.getPoliza(route.params['id']).pipe(
      catchError((error) => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
