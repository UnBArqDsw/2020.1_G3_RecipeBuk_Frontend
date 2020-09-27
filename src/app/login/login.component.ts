import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from 'src/app/services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(
    // formBuilder: FormBuilder
    private accountService: AccountService
    ) { }
    
    ngOnInit(): void {
      this.form = FormBuilder.prototype.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
    }
    
    // get f() { return this.form.controls; }
    
  onSubmit(email, password) {
    this.submitted = true;
    
    // if (this.form.invalid) {
    //   return;
    // }
    
    this.loading = true;
    console.log('fuck');
    this.accountService.login(email, password)
    .pipe(first())
    .subscribe({
      next: () => {
        // get return url from query parameters or default to home page
        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // this.router.navigateByUrl(returnUrl);
      },
      error: error => {
        console.log(error);
            // this.alertService.error(error);
            this.loading = false;
      }
    });
  }

}
