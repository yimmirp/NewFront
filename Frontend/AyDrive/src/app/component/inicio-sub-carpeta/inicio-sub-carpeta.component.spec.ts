import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSubCarpetaComponent } from './inicio-sub-carpeta.component';

describe('InicioSubCarpetaComponent', () => {
  let component: InicioSubCarpetaComponent;
  let fixture: ComponentFixture<InicioSubCarpetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSubCarpetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSubCarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
