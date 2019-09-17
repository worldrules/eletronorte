import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosInternosComponent } from './dados-internos.component';

describe('DadosInternosComponent', () => {
  let component: DadosInternosComponent;
  let fixture: ComponentFixture<DadosInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
