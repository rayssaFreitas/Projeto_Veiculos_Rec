import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialContatoComponent } from './inicial-contato.component';

describe('InicialContatoComponent', () => {
  let component: InicialContatoComponent;
  let fixture: ComponentFixture<InicialContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
