import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloContainerComponent } from './articulo-container.component';

describe('ArticuloContainerComponent', () => {
  let component: ArticuloContainerComponent;
  let fixture: ComponentFixture<ArticuloContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
