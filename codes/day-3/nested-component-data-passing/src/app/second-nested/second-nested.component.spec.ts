import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNestedComponent } from './second-nested.component';

describe('SecondNestedComponent', () => {
  let component: SecondNestedComponent;
  let fixture: ComponentFixture<SecondNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondNestedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
