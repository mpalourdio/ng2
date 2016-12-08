import {Component, Input} from '@angular/core';
import {Shared} from './shared';

@Component({
  selector: 'child',
  template: require('./child.html')
})
export class ChildComponent {
  @Input()
  whatever: Shared;
}
