import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoarethemComponent } from './whoarethem.component';

describe('WhoarethemComponent', () => {
  let component: WhoarethemComponent;
  let fixture: ComponentFixture<WhoarethemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoarethemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoarethemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
