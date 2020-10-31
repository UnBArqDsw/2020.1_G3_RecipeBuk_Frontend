import { Component, OnInit } from '@angular/core';
import {AccountService} from 'src/app/services';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public fonk;
  public submitted;
  public emailIsValid = true;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.fonk = (this.accountService.userValue.email);
    console.log(this.accountService.userValue.email)
  }
  ngOnChanges() {
    console.log('imgay')
  }

  onSubmit(email) {
    this.emailIsValid = this.accountService.emailIsValid(email)
  }

}
