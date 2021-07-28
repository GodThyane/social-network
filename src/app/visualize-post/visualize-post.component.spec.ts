import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizePostComponent } from './visualize-post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {DatePipe} from '@angular/common';

describe('VisualizePostComponent', () => {
  let component: VisualizePostComponent;
  let fixture: ComponentFixture<VisualizePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ VisualizePostComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
