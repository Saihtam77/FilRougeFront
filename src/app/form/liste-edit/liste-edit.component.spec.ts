import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEditComponent } from './liste-edit.component';

describe('ListeEditComponent', () => {
  let component: ListeEditComponent;
  let fixture: ComponentFixture<ListeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
