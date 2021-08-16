import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItemDetailsComponent } from './show-item-details.component';

describe('ShowItemDetailsComponent', () => {
  let component: ShowItemDetailsComponent;
  let fixture: ComponentFixture<ShowItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
