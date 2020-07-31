import { UserService } from './../../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { Poliza } from 'src/app/_models/poliza';
import { PolizaService } from './../../_services/poliza.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css'],
})
export class PolizaComponent implements OnInit {
  poliza: Poliza;
  user: User;

  constructor(
    private polizaService: PolizaService,
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      this.poliza = res['poliza'];
      console.log(this.poliza);
      this.loadUser();
    });
  }

  loadUser() {
    this.userService.getUser(this.poliza.id).subscribe((res) => {
      this.user = res;
    });
  }
}
