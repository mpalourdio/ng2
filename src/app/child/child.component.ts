import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ApplicationsListService } from '../applications-list.service';
import { ColorDirective } from '../color.directive';
import { DummyInterface } from '../dummy-interface';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, AfterViewInit {

    applicationsList: string[] = [];

    @Input()
    bindingFromAppComponent: DummyInterface;

    @Input()
    doubleBindedChild;

    private _doubleBindedChild2;

    @Output()
    doubleBindedChildChange = new EventEmitter<string>();

    @Output()
    doubleBindedChild2Change = new EventEmitter<string>();

    @ViewChild(ColorDirective)
    colorDirective: ColorDirective;

    color;

    constructor(private applicationsListService: ApplicationsListService) {
        this.color = 'type a known html color';
        this.applicationsListService.applicationsList().subscribe(l => this.applicationsList = l);
    }

    emitNgModelChanges(event): void {
        this.doubleBindedChildChange.emit(event);
    }

    get doubleBindedChild2() {
        return this._doubleBindedChild2;
    }

    @Input()
    set doubleBindedChild2(value) {
        this._doubleBindedChild2 = value;
        this.emitNgModel2Changes(value);
    }

    emitNgModel2Changes(event): void {
        this.doubleBindedChildChange.emit(event);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('this only works when triggered from parent');
    }

    ngAfterViewInit() {
        console.log(this.colorDirective);
    }
}
