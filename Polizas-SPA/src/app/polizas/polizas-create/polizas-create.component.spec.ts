import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasCreateComponent } from './polizas-create.component';

describe('PolizasCreateComponent', () => {
  let component: PolizasCreateComponent;
  let fixture: ComponentFixture<PolizasCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizasCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
