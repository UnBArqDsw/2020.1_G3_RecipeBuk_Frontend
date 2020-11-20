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
import { MatListModule } from '@angular/material/list';
import { SenhaComponent } from './senha/senha.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { MinhasReceitasComponent } from './minhas-receitas/minhas-receitas.component'
import { VisualizarReceitasComponent } from './visualizar-receitas/visualizar-receitas.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { LivroComponent } from './livro/livro.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipeCard } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    CadastroReceitasComponent,
    SenhaComponent,
	PesquisaComponent,
	NavbarComponent,
    PerfilComponent,
    MinhasReceitasComponent,
    VisualizarReceitasComponent,
	HomepageComponent,
	CadastroLivroComponent,
	LivroComponent,
	RecipeCard,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule, 
    MatSelectModule, 
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
	MatDialogModule,
  ],
  providers: [],
  entryComponents: [
    CadastroReceitasComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
