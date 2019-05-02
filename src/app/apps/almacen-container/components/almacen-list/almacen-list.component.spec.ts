import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenListComponent } from './almacen-list.component';

describe('AlmacenListComponent', () => {
  let component: AlmacenListComponent;
  let fixture: ComponentFixture<AlmacenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
