import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroReceitasComponent } from './cadastro-receitas/cadastro-receitas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { TesteSalvarReceitasComponent } from './cadastro-receitas/teste-salvar-receitas/teste-salvar-receitas.component';

//import { SenhaComponent } from './senha/senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    CadastroReceitasComponent,
    TesteSalvarReceitasComponent,
    //SenhaComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    CadastroReceitasComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
