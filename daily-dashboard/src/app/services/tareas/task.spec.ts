import { TestBed } from '@angular/core/testing';

import { Task } from './task';

describe('Task', () => {
  let service: Task;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestBed); //task era lo que estaba entre parentesis
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
