import { Component, OnInit } from '@angular/core';
import {AccountService} from 'src/app/services';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  loading = false;
  submitted = false;
  emailIsValid = true;
  passwordsMatch = true;
  emailExists = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }


  onSubmit(name, email, password, confirmPassword) {
    
    this.submitted = true;
    
    if(this.accountService.emailIsValid(email)) {
      this.emailIsValid = true;
    } else {
      this.emailIsValid = false;
    }
    
    if(password == confirmPassword) {
      this.passwordsMatch = true;
    } else {
      this.passwordsMatch = false;
    }

    if(!this.passwordsMatch || !this.emailIsValid) {
      console.log('cadastro falhou')
      return;
    }

    this.loading = true;
    this.accountService.register(name, email, password).then(() => {
      console.log('cadastro realizado');
    }).catch((e) => {
      console.log('cadastro falhou',);
      this.emailExists = true;
      this.loading = false;
    });
  }

}
