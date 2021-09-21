import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWithBodyComponent } from './delete-with-body.component';

describe('DeleteWithBodyComponent', () => {
  let component: DeleteWithBodyComponent;
  let fixture: ComponentFixture<DeleteWithBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWithBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWithBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
