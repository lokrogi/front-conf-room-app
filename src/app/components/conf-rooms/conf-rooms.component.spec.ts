import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfRoomsComponent } from './conf-rooms.component';

describe('ConfRoomsComponent', () => {
  let component: ConfRoomsComponent;
  let fixture: ComponentFixture<ConfRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
