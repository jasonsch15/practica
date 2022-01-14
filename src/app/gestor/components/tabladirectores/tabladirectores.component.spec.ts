import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladirectoresComponent } from './tabladirectores.component';

describe('TabladirectoresComponent', () => {
  let component: TabladirectoresComponent;
  let fixture: ComponentFixture<TabladirectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabladirectoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabladirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
