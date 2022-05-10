import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioSMSComponent } from './envio-sms.component';

describe('EnvioSMSComponent', () => {
  let component: EnvioSMSComponent;
  let fixture: ComponentFixture<EnvioSMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioSMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvioSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
