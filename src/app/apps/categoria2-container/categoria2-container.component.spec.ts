import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoria2ContainerComponent } from './categoria2-container.component';

describe('Categoria2ContainerComponent', () => {
  let component: Categoria2ContainerComponent;
  let fixture: ComponentFixture<Categoria2ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Categoria2ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Categoria2ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
