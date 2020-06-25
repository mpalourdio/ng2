import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IntlTelInputOptions } from 'intl-tel-input-ng';
import { Observable } from 'rxjs';
import { ApplicationsListService } from '../applications-list.service';
import { ColorDirective } from '../color.directive';
import { Application } from '../fav-star/application';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

    public applicationsList$!: Observable<Application[]>;

    @Input()
    public doubleBindedChild!: string;

    private _doubleBindedChild2!: string;

    @Output()
    public doubleBindedChildChange = new EventEmitter<string>();

    @Output()
    public doubleBindedChild2Change = new EventEmitter<string>();

    @ViewChild(ColorDirective)
    public colorDirective!: ColorDirective;

    public E164PhoneNumber!: string;

    public color = 'Enter an existing HTML color';
    public inputTextInForm!: string;
    public intlTelInputOptions: IntlTelInputOptions = {
        preferredCountries: ['ch'],
        onlyCountries: ['fr', 'ch']
    };

    constructor(private applicationsListService: ApplicationsListService) {
    }

    public ngOnInit(): void {
        this.applicationsList$ = this.applicationsListService.applicationsList();
    }

    public emitNgModelChanges(event: string): void {
        this.doubleBindedChildChange.emit(event);
    }

    get doubleBindedChild2(): string {
        return this._doubleBindedChild2;
    }

    @Input()
    set doubleBindedChild2(value: string) {
        this._doubleBindedChild2 = value;
        this.emitNgModel2Changes(value);
    }

    private emitNgModel2Changes(event: string): void {
        this.doubleBindedChildChange.emit(event);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('this only works when triggered from parent');
    }
}
