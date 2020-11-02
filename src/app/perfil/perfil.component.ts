import { Component, OnInit } from '@angular/core';
import {AccountService} from 'src/app/services';
import { User } from '../models';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public userEmail;
  public userName;
  public submitted;
  public emailIsValid = true;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.userEmail = this.accountService.userValue.email;
    this.userName = this.accountService.userValue.name
    console.log(this.accountService.userValue.email)
  }
  ngOnChanges() {
    console.log('imgay');
  }

  onSubmit(name, email, senha) {
    this.emailIsValid = this.accountService.emailIsValid(email);
    if(this.emailIsValid && senha != '') {
      this.accountService.update({newUser: new User(name, email, senha), oldUser: this.accountService.userValue});
      console.log('imgay');
    }
  }
}
