import { TestBed } from '@angular/core/testing';

import { AbilitiesService } from './abilities.service';
import {HttpClientModule} from '@angular/common/http';

describe('AbilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: AbilitiesService = TestBed.get(AbilitiesService);
    expect(service).toBeTruthy();
  });
});
