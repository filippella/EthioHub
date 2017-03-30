import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorilsComponent } from './tutorils.component';

describe('TutorilsComponent', () => {
  let component: TutorilsComponent;
  let fixture: ComponentFixture<TutorilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
