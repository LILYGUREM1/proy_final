import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebbsComponent } from './webbs.component';

describe('WebbsComponent', () => {
  let component: WebbsComponent;
  let fixture: ComponentFixture<WebbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
