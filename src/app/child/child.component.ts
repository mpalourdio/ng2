import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IntlTelInputOptions } from 'intl-tel-input-ng';
import { ApplicationsListService } from '../applications-list.service';
import { ColorDirective } from '../color.directive';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {

    public applicationsList: any[] = [];

    @Input()
    public doubleBindedChild;

    private _doubleBindedChild2;

    @Output()
    public doubleBindedChildChange = new EventEmitter<string>();

    @Output()
    public doubleBindedChild2Change = new EventEmitter<string>();

    @ViewChild(ColorDirective)
    colorDirective: ColorDirective;

    public E164PhoneNumber: string;

    color = 'Enter an existing HTML color';
    inputTextInForm: string;
    intlTelInputOptions: IntlTelInputOptions = {
        preferredCountries: ['ch'],
        onlyCountries: ['fr', 'ch'],
    };

    constructor(private applicationsListService: ApplicationsListService) {
        this.applicationsListService
            .applicationsList()
            .subscribe(l => this.applicationsList = l);
    }

    emitNgModelChanges(event): void {
        this.doubleBindedChildChange.emit(event);
    }

    get doubleBindedChild2(): any {
        return this._doubleBindedChild2;
    }

    @Input()
    set doubleBindedChild2(value) {
        this._doubleBindedChild2 = value;
        this.emitNgModel2Changes(value);
    }

    private emitNgModel2Changes(event): void {
        this.doubleBindedChildChange.emit(event);
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('this only works when triggered from parent');
    }
}
