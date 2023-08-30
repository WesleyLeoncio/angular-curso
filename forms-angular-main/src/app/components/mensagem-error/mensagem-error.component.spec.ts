import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErrorComponent } from './mensagem-error.component';

describe('MensagemErrorComponent', () => {
  let component: MensagemErrorComponent;
  let fixture: ComponentFixture<MensagemErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
