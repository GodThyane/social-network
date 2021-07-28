import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TablaAdministradorComponent} from './tabla-administrador/tabla-administrador.component';
import {HeaderComponent} from './header/header.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {VisualizePostComponent} from './visualize-post/visualize-post.component';
import {CreatePostFormComponent} from './create-post-form/create-post-form.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {HttpClientModule} from '@angular/common/http';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {PostComponent} from './post/post.component';
import {CommentComponent} from './comment/comment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TablaAdministradorComponent,
    HeaderComponent,
    LoginFormComponent,
    RegisterFormComponent,
    VisualizePostComponent,
    CreatePostFormComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
