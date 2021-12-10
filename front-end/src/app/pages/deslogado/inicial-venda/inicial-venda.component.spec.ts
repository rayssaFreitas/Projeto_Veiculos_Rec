import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialVendaComponent } from './inicial-venda.component';

describe('InicialVendaComponent', () => {
  let component: InicialVendaComponent;
  let fixture: ComponentFixture<InicialVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
