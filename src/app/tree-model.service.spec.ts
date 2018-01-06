import { TestBed, inject } from '@angular/core/testing';

import { TreeModelService } from './tree-model.service';

describe('TreeModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeModelService]
    });
  });

  it('should be created', inject([TreeModelService], (service: TreeModelService) => {
    expect(service).toBeTruthy();
  }));
});
