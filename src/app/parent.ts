import {Component} from '@angular/core';
import {Shared} from './shared';

const SHARED: Shared = {id: 11, name: 'Mr. Nice'};

@Component({
  selector: 'parent',
  template: require('./parent.html')
})
export class ParentComponent {
  allo: any;
  shared = SHARED;

  constructor() {
    this.allo = this.shared;
  }
}
