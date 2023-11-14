import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogoutComponent } from './adminlogout.component';

describe('AdminlogoutComponent', () => {
  let component: AdminlogoutComponent;
  let fixture: ComponentFixture<AdminlogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminlogoutComponent]
    });
    fixture = TestBed.createComponent(AdminlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
