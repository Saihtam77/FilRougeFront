import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheViewComponent } from './tache-view.component';

describe('TacheViewComponent', () => {
  let component: TacheViewComponent;
  let fixture: ComponentFixture<TacheViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TacheViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TacheViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
