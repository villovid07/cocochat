import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserChatComponent } from './main-user-chat.component';

describe('MainUserChatComponent', () => {
  let component: MainUserChatComponent;
  let fixture: ComponentFixture<MainUserChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainUserChatComponent]
    });
    fixture = TestBed.createComponent(MainUserChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
