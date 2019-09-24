import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AignarpolizaComponent } from './aignarpoliza.component';

describe('AignarpolizaComponent', () => {
  let component: AignarpolizaComponent;
  let fixture: ComponentFixture<AignarpolizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AignarpolizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AignarpolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
