import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {TablaAdministradorComponent} from './tabla-administrador/tabla-administrador.component';
import {VisualizePostComponent} from './visualize-post/visualize-post.component';
import {CreatePostFormComponent} from './create-post-form/create-post-form.component';
import {PostComponent} from './post/post.component';
import {CheckloginGuard} from './checklogin.guard';
import {CheckpostsGuard} from './checkposts.guard';
import {CheckadminGuard} from './checkadmin.guard';

const routes: Routes = [
  {path: 'login', component: VisualizePostComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'admin', component: TablaAdministradorComponent},
  {path: 'posts', component: VisualizePostComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'create-post', component: CreatePostFormComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', component: VisualizePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
