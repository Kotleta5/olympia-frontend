import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalTableComponent } from './medal-table.component';

describe('MedalTableComponent', () => {
  let component: MedalTableComponent;
  let fixture: ComponentFixture<MedalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedalTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
