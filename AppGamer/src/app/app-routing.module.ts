import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RegistroComponent } from './registro/registro.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'detalle/:idPost', component: DetalleComponent },
  { path: 'new', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
