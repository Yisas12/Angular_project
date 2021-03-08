import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebExplanationComponent } from './web-explanation.component';

describe('WebExplanationComponent', () => {
  let component: WebExplanationComponent;
  let fixture: ComponentFixture<WebExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
