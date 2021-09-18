import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntireResponseComponent } from './entire-response.component';

describe('EntireResponseComponent', () => {
  let component: EntireResponseComponent;
  let fixture: ComponentFixture<EntireResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntireResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntireResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
