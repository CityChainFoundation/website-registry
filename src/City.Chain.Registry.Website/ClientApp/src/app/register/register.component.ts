import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from 'src/shared/registration.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private sub: any;

  constructor(private route: ActivatedRoute, public reg: RegistrationService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
