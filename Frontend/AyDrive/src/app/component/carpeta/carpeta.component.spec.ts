import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetaComponent } from './carpeta.component';

describe('CarpetaComponent', () => {
  let component: CarpetaComponent;
  let fixture: ComponentFixture<CarpetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
