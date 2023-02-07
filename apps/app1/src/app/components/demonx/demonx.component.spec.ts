import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonxComponent } from './demonx.component';

describe('DemonxComponent', () => {
  let component: DemonxComponent;
  let fixture: ComponentFixture<DemonxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
