import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackComponent } from './fullstack.component';

describe('FullstackComponent', () => {
  let component: FullstackComponent;
  let fixture: ComponentFixture<FullstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullstackComponent]
    });
    fixture = TestBed.createComponent(FullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
