import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsCreateComponent } from './projets-create.component';

describe('ProjetsCreateComponent', () => {
  let component: ProjetsCreateComponent;
  let fixture: ComponentFixture<ProjetsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
