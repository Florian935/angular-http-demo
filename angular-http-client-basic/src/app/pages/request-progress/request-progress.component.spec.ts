import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProgressComponent } from './request-progress.component';

describe('RequestProgressComponent', () => {
  let component: RequestProgressComponent;
  let fixture: ComponentFixture<RequestProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
