import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services';
import { first } from 'rxjs/operators';

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void { }

  onSubmit(email, password) {
    this.submitted = true;

    if (emailIsValid(email)) {
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }

    if ((!(password == '') && !this.emailIsValid) || password == '' || !this.emailIsValid) {
      console.log('login falhou');
      return;
    }

    this.loading = true;
    this.accountService.login(email, password).then(() => {
      console.log('login realizado');
    }).catch((e) => {
      console.log('login falhou', e);
    })
  }

}
