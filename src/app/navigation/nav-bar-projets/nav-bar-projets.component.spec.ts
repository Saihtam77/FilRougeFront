import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProjetsComponent } from './nav-bar-projets.component';

describe('NavBarProjetsComponent', () => {
  let component: NavBarProjetsComponent;
  let fixture: ComponentFixture<NavBarProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarProjetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
