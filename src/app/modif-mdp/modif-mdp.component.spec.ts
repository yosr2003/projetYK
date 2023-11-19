import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMdpComponent } from './modif-mdp.component';

describe('ModifMdpComponent', () => {
  let component: ModifMdpComponent;
  let fixture: ComponentFixture<ModifMdpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifMdpComponent]
    });
    fixture = TestBed.createComponent(ModifMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
