import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunComponentsLibComponent } from './fun-components-lib.component';

describe('FunComponentsLibComponent', () => {
  let component: FunComponentsLibComponent;
  let fixture: ComponentFixture<FunComponentsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunComponentsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunComponentsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
