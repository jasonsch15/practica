import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaformComponent } from './peliculaform.component';

describe('PeliculaformComponent', () => {
  let component: PeliculaformComponent;
  let fixture: ComponentFixture<PeliculaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculaformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
