import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCreatePage } from './user-create.page';

describe('UserCreatePage', () => {
  let component: UserCreatePage;
  let fixture: ComponentFixture<UserCreatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
