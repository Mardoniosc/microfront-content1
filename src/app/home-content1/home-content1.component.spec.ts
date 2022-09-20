import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContent1Component } from './home-content1.component';

describe('HomeContent1Component', () => {
  let component: HomeContent1Component;
  let fixture: ComponentFixture<HomeContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
