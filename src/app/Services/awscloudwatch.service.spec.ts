import { TestBed } from '@angular/core/testing';

import { AwscloudwatchService } from './awscloudwatch.service';

describe('AwscloudwatchService', () => {
  let service: AwscloudwatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwscloudwatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
