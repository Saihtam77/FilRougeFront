import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetActionsBoardComponent } from './projet-actions-board.component';

describe('ProjetActionsBoardComponent', () => {
  let component: ProjetActionsBoardComponent;
  let fixture: ComponentFixture<ProjetActionsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetActionsBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetActionsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
