import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavNewFormComponent } from './sidenav-new-form.component';

describe('SidenavNewFormComponent', () => {
  let component: SidenavNewFormComponent;
  let fixture: ComponentFixture<SidenavNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
