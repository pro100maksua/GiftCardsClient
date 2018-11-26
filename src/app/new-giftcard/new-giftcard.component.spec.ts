import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGiftcardComponent } from './new-giftcard.component';

describe('NewGiftcardComponent', () => {
  let component: NewGiftcardComponent;
  let fixture: ComponentFixture<NewGiftcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGiftcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGiftcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
