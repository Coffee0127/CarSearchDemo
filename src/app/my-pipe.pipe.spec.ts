/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MyPipePipe } from './my-pipe.pipe';

describe('Pipe: MyPipe', () => {
  it('create an instance', () => {
    let pipe = new MyPipePipe();
    expect(pipe).toBeTruthy();
  });
});
