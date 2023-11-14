import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminborrowsComponent } from './adminborrows.component';

describe('AdminborrowsComponent', () => {
  let component: AdminborrowsComponent;
  let fixture: ComponentFixture<AdminborrowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminborrowsComponent]
    });
    fixture = TestBed.createComponent(AdminborrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
