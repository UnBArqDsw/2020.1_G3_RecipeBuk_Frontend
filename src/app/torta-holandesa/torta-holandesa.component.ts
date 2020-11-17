import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-torta-holandesa',
  templateUrl: './torta-holandesa.component.html',
  styleUrls: ['./torta-holandesa.component.css']
})
export class TortaHolandesaComponent implements OnInit {

  constructor() {
    form: FormGroup;
   }

  ngOnInit(): void {
  }

}
