import {
    AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,
    ViewChild
} from '@angular/core';
import { DummyInterface } from '../dummy-interface';
import { ColorDirective } from '../color.directive';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, AfterViewInit {

    @Input()
    bindingFromAppComponent: DummyInterface;

    @Input()
    doubleBindedChild;

    @Output()
    doubleBindedChildChange = new EventEmitter<string>();

    @ViewChild(ColorDirective)
    colorDirective: ColorDirective;

    color;

    constructor() {
        this.color = 'type a known html color';
    }

    emitNgModelChanges(event): void {
        this.doubleBindedChildChange.emit(event);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('this only works when triggered from parent');
    }

    ngAfterViewInit() {
        console.log(this.colorDirective);
    }
}
