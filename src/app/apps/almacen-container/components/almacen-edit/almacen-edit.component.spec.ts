import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenEditComponent } from './almacen-edit.component';

describe('AlmacenEditComponent', () => {
  let component: AlmacenEditComponent;
  let fixture: ComponentFixture<AlmacenEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
