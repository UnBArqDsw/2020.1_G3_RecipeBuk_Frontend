import { Component, OnInit } from '@angular/core';
import {AccountService} from 'src/app/services';
import { first } from 'rxjs/operators';


function emailIsValid (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

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

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }


  onSubmit(name, email, password, confirmPassword) {
    
    this.submitted = true;
    
    if(emailIsValid(email)) {
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
      return;
    }

    this.loading = true;
    this.accountService.register(name, email, password)
        .pipe(first())
        .subscribe({
            next: () => {
              // console.log('e', e)
                // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                // this.router.navigate(['../login'], { relativeTo: this.route });
            },
            error: error => {
              this.emailExists = true;
                // this.alertService.error(error);
                this.loading = false;
            }
        });
}

}
