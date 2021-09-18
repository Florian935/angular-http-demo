import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonJsonDataComponent } from './non-json-data.component';

describe('NonJsonDataComponent', () => {
  let component: NonJsonDataComponent;
  let fixture: ComponentFixture<NonJsonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonJsonDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonJsonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
