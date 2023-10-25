import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileservicesComponent } from './profileservices.component';

describe('ProfileservicesComponent', () => {
  let component: ProfileservicesComponent;
  let fixture: ComponentFixture<ProfileservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileservicesComponent]
    });
    fixture = TestBed.createComponent(ProfileservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
