import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompComponent } from './auto-comp.component';

describe('AutoCompComponent', () => {
  let component: AutoCompComponent;
  let fixture: ComponentFixture<AutoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
