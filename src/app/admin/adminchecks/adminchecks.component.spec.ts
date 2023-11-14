import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminchecksComponent } from './adminchecks.component';

describe('AdminchecksComponent', () => {
  let component: AdminchecksComponent;
  let fixture: ComponentFixture<AdminchecksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminchecksComponent]
    });
    fixture = TestBed.createComponent(AdminchecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
