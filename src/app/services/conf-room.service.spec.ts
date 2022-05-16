import { TestBed } from '@angular/core/testing';

import { ConfRoomService } from './conf-room.service';

describe('ConfRoomService', () => {
  let service: ConfRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
