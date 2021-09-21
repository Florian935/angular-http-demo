import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingInteractionComponent } from './debouncing-interaction.component';

describe('DebouncingInteractionComponent', () => {
  let component: DebouncingInteractionComponent;
  let fixture: ComponentFixture<DebouncingInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouncingInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncingInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
