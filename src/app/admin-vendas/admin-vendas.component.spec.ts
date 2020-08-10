import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVendasComponent } from './admin-vendas.component';

describe('AdminVendasComponent', () => {
  let component: AdminVendasComponent;
  let fixture: ComponentFixture<AdminVendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
