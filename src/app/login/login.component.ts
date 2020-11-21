import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  emailIsValid = true;
  logged = false;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(email, password) {
    this.submitted = true;

    this.emailIsValid = this.accountService.emailIsValid(email);

    if ((!(password == '') && !this.emailIsValid) || password == '' || !this.emailIsValid) {
      console.log('login falhou');
      return;
    }

    this.loading = true;
    this.accountService.login(email, password).then(() => {
      console.log('login realizado');
      this.logged = true;
      this.router.navigate(['/']);
    }).catch((e) => {
      console.log('login falhou', e);
    })
  }
}