import { PolizaListResolver } from './_resolvers/poliza-list.resolver';
import { PolizaEditResolver } from './_resolvers/poliza-edit.resolver';
import { PolizaService } from './_services/poliza.service';
import { AuthGuard } from './_guards/auth.guard';
import { AlertifyService } from './_services/alertify.service';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { TimeagoModule } from 'ngx-timeago';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/authservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { appRoutes } from './routes';
import { JwtModule } from '@auth0/angular-jwt';
import { FileUploadModule } from 'ng2-file-upload';
import { HomeComponent } from './home/home.component';
import { PolizasListComponent } from './polizas/polizas-list/polizas-list.component';
import { PolizasCreateComponent } from './polizas/polizas-create/polizas-create.component';
import { PolizaEditComponent } from './polizas/poliza-edit/poliza-edit.component';
import { PolizaComponent } from './polizas/poliza/poliza.component';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PolizasListComponent,
    PolizasCreateComponent,
    PolizaEditComponent,
    PolizaComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    TimeagoModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ButtonsModule.forRoot(),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/api/auth'],
      },
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    PolizaService,
    PolizaListResolver,
    PolizaEditResolver,
  ],
})
export class AppModule {}
