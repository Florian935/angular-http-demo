import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingInteractionFormComponent } from './debouncing-interaction-form.component';

describe('DebouncingInteractionFormComponent', () => {
  let component: DebouncingInteractionFormComponent;
  let fixture: ComponentFixture<DebouncingInteractionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouncingInteractionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncingInteractionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
