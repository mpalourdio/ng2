import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DummyInterface } from '../dummy-interface';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

    @Input()
    bindingFromAppComponent: DummyInterface;

    @Input()
    doubleBindedChild;

    @Output()
    doubleBindedChildChange = new EventEmitter<string>();

    color;

    constructor() {
        this.color = 'type a known html color';
    }

    detectNgModelChanges(event) {
        this.doubleBindedChildChange.emit(event);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('this only works when triggered from parent');
    }
}
