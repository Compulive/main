import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorContainerComponent } from './proveedor-container.component';

describe('ProveedorContainerComponent', () => {
  let component: ProveedorContainerComponent;
  let fixture: ComponentFixture<ProveedorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
