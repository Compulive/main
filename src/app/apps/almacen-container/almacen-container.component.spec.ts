import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenContainerComponent } from './almacen-container.component';

describe('AlmacenContainerComponent', () => {
  let component: AlmacenContainerComponent;
  let fixture: ComponentFixture<AlmacenContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmacenContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmacenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
