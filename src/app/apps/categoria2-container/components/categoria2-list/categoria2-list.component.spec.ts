import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoria2ListComponent } from './categoria2-list.component';

describe('Categoria2ListComponent', () => {
  let component: Categoria2ListComponent;
  let fixture: ComponentFixture<Categoria2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoria2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
