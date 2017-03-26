import {Component, Input} from '@angular/core';
import {DummyInterface} from '../dummy-interface';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent {
    @Input()
    bindingFromAppComponent: DummyInterface;

    color;

    constructor() {
        this.color = 'type a known html color';
    }
}
