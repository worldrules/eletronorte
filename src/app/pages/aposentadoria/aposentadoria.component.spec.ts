import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AposentadoriaComponent } from './aposentadoria.component';

describe('AposentadoriaComponent', () => {
  let component: AposentadoriaComponent;
  let fixture: ComponentFixture<AposentadoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AposentadoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AposentadoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
