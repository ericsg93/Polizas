import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasListComponent } from './polizas-list.component';

describe('PolizasListComponent', () => {
  let component: PolizasListComponent;
  let fixture: ComponentFixture<PolizasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
