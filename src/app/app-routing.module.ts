import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { PesquisaComponent } from './pesquisa/pesquisa.component'
import { SenhaComponent } from './senha/senha.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MinhasReceitasComponent } from './minhas-receitas/minhas-receitas.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'senha', component: SenhaComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'receitas', component: MinhasReceitasComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
