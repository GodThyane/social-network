import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {TablaAdministradorComponent} from './tabla-administrador/tabla-administrador.component';
import {HeaderComponent} from './header/header.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {VisualizePostComponent} from './visualize-post/visualize-post.component';
import {PostComponent} from './post/post.component';
import {CreatePostFormComponent} from './create-post-form/create-post-form.component';
import {CommentComponent} from './comment/comment.component';
import {HttpClientModule} from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        LoginFormComponent,
        TablaAdministradorComponent,
        HeaderComponent,
        RegisterFormComponent,
        VisualizePostComponent,
        PostComponent,
        CreatePostFormComponent,
        CommentComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

});
