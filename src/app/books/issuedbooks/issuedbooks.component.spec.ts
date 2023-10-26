import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedbooksComponent } from './issuedbooks.component';

describe('IssuedbooksComponent', () => {
  let component: IssuedbooksComponent;
  let fixture: ComponentFixture<IssuedbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssuedbooksComponent]
    });
    fixture = TestBed.createComponent(IssuedbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
