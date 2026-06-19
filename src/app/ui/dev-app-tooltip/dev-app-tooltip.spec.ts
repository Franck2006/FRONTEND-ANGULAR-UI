import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAppTooltip } from './dev-app-tooltip';

describe('DevAppTooltip', () => {
  let component: DevAppTooltip;
  let fixture: ComponentFixture<DevAppTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevAppTooltip],
    }).compileComponents();

    fixture = TestBed.createComponent(DevAppTooltip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
