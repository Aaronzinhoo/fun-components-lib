import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideSupriseComponent } from './hide-suprise.component';

describe('HideSupriseComponent', () => {
  let component: HideSupriseComponent;
  let fixture: ComponentFixture<HideSupriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideSupriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideSupriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
