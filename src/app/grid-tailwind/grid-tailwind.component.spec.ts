import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTailwindComponent } from './grid-tailwind.component';

describe('GridTailwindComponent', () => {
  let component: GridTailwindComponent;
  let fixture: ComponentFixture<GridTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTailwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
