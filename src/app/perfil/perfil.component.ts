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

  ngOnInit(): void {}

  ngOnChanges() {
  }

  onSubmit(name, email, senha) {
    this.emailIsValid = this.accountService.emailIsValid(email);
    if(this.emailIsValid && senha != '') {
      this.accountService.update({info: new User(name, email, null), password: senha});
    }
  }
}
