import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {HttpClientModule} from '@angular/common/http';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SimpleNotificationsModule.forRoot(), HttpClientModule],
      declarations: [ PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
