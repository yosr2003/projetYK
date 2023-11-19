import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaiComponent } from './essai.component';

describe('EssaiComponent', () => {
  let component: EssaiComponent;
  let fixture: ComponentFixture<EssaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EssaiComponent]
    });
    fixture = TestBed.createComponent(EssaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
