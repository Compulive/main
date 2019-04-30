import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoria2FormComponent } from './categoria2-form.component';

describe('Categoria2FormComponent', () => {
  let component: Categoria2FormComponent;
  let fixture: ComponentFixture<Categoria2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoria2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
