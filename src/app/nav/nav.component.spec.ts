/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NavComponent } from './nav.component';

describe('Component: Nav', () => {
  it('should create an instance', () => {
    let component = new NavComponent();
    expect(component).toBeTruthy();
  });
});