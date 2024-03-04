import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSportComponent } from './select-sport.component';

describe('SelectSportComponent', () => {
  let component: SelectSportComponent;
  let fixture: ComponentFixture<SelectSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
