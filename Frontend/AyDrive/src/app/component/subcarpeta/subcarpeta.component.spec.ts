import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcarpetaComponent } from './subcarpeta.component';

describe('SubcarpetaComponent', () => {
  let component: SubcarpetaComponent;
  let fixture: ComponentFixture<SubcarpetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcarpetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcarpetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
