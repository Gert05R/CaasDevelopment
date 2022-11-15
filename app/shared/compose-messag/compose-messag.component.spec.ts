import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMessagComponent } from './compose-messag.component';

describe('ComposeMessagComponent', () => {
  let component: ComposeMessagComponent;
  let fixture: ComponentFixture<ComposeMessagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeMessagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposeMessagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
