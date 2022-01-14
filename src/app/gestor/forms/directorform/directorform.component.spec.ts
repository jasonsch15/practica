import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorformComponent } from './directorform.component';

describe('DirectorformComponent', () => {
  let component: DirectorformComponent;
  let fixture: ComponentFixture<DirectorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
