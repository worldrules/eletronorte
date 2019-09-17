import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicaoComponent } from './atribuicao.component';

describe('AtribuicaoComponent', () => {
  let component: AtribuicaoComponent;
  let fixture: ComponentFixture<AtribuicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtribuicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtribuicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
