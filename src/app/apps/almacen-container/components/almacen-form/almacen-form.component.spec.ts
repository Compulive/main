import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenFormComponent } from './almacen-form.component';

describe('AlmacenFormComponent', () => {
  let component: AlmacenFormComponent;
  let fixture: ComponentFixture<AlmacenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
