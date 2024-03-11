import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgerSectionComponent } from './judger-section.component';

describe('JudgerSectionComponent', () => {
  let component: JudgerSectionComponent;
  let fixture: ComponentFixture<JudgerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgerSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
