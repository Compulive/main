import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoria2EditComponent } from './categoria2-edit.component';

describe('Categoria2EditComponent', () => {
  let component: Categoria2EditComponent;
  let fixture: ComponentFixture<Categoria2EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoria2EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
