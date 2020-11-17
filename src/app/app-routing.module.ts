import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { CadastroReceitasComponent } from './cadastro-receitas/cadastro-receitas.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component'
import { SenhaComponent } from './senha/senha.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MinhasReceitasComponent } from './minhas-receitas/minhas-receitas.component'
import { VisualizarReceitasComponent } from './visualizar-receitas/visualizar-receitas.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-receitas', component: CadastroReceitasComponent },
  { path: 'senha', component: SenhaComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'receitas', component: MinhasReceitasComponent},
  { path: 'visualizar-receitas', component: VisualizarReceitasComponent },
  { path: 'homepage', component: HomepageComponent},
  { path: 'cadastro-livro', component: CadastroLivroComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
