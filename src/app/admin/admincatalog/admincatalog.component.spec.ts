import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincatalogComponent } from './admincatalog.component';

describe('AdmincatalogComponent', () => {
  let component: AdmincatalogComponent;
  let fixture: ComponentFixture<AdmincatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincatalogComponent]
    });
    fixture = TestBed.createComponent(AdmincatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
