import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireCreateComponent } from './commentaire-create.component';

describe('CommentaireCreateComponent', () => {
  let component: CommentaireCreateComponent;
  let fixture: ComponentFixture<CommentaireCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentaireCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentaireCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
