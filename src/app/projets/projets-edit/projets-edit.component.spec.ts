import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsEditComponent } from './projets-edit.component';

describe('ProjetsEditComponent', () => {
  let component: ProjetsEditComponent;
  let fixture: ComponentFixture<ProjetsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
