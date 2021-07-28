import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TablaAdministradorComponent} from './tabla-administrador.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxPaginationModule} from 'ngx-pagination';

describe('TablaAdministradorComponent', () => {
  let component: TablaAdministradorComponent;
  let fixture: ComponentFixture<TablaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxPaginationModule],
      declarations: [TablaAdministradorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
