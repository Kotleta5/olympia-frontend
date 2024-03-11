import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMedalsComponent } from './country-medals.component';

describe('CountryMedalsComponent', () => {
  let component: CountryMedalsComponent;
  let fixture: ComponentFixture<CountryMedalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryMedalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryMedalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
