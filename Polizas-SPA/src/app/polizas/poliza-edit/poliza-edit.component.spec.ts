import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaEditComponent } from './poliza-edit.component';

describe('PolizaEditComponent', () => {
  let component: PolizaEditComponent;
  let fixture: ComponentFixture<PolizaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
