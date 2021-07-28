import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostFormComponent } from './create-post-form.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('CreatePostFormComponent', () => {
  let component: CreatePostFormComponent;
  let fixture: ComponentFixture<CreatePostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SimpleNotificationsModule.forRoot(), FormsModule, HttpClientModule],
      declarations: [ CreatePostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
