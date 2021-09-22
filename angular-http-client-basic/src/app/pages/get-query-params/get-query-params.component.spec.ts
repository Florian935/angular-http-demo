import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQueryParamsComponent } from './get-query-params.component';

describe('GetQueryParamsComponent', () => {
  let component: GetQueryParamsComponent;
  let fixture: ComponentFixture<GetQueryParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQueryParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
