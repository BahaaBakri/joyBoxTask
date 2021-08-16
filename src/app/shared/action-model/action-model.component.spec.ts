import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionModelComponent } from './action-model.component';

describe('ErrorModelComponent', () => {
  let component: ActionModelComponent;
  let fixture: ComponentFixture<ActionModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
