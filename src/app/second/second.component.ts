import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DummyInterface } from '../dummy-interface';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnChanges {

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
