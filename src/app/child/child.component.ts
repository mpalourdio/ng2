import {
    Component,
    EventEmitter,
    Input,
    model,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { IntlTelInputComponent, IntlTelInputOptions } from 'intl-tel-input-ng';
import { Observable } from 'rxjs';
import { ApplicationsListService } from '../applications-list.service';
import { ColorDirective } from '../color.directive';
import { Application } from '../fav-star/application';
import { FormsModule } from "@angular/forms";
import { AsyncPipe, JsonPipe, NgIf } from "@angular/common";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { SearchFilterComponent } from "../search-filter/search-filter.component";

@Component({
    selector: 'app-child',
    standalone: true,
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    imports: [
        ColorDirective,
        IntlTelInputComponent,
        FormsModule,
        JsonPipe,
        CheckboxComponent,
        SearchFilterComponent,
        NgIf,
        AsyncPipe,
    ]
})
export class ChildComponent implements OnInit, OnChanges {

    applicationsList$!: Observable<Application[]>;

    @Input()
    doubleBindedChild!: string;

    private _doubleBindedChild2!: string;

    @Output()
    doubleBindedChildChange = new EventEmitter<string>();

    @Output()
    doubleBindedChild2Change = new EventEmitter<string>();

    readonly doubleBindedChild3 = model<string>();

    @ViewChild(ColorDirective)
    colorDirective!: ColorDirective;

    E164PhoneNumber!: string;

    color = 'Enter an existing HTML color';
    inputTextInForm!: string;
    intlTelInputOptions: IntlTelInputOptions = {
        preferredCountries: ['ch'],
        onlyCountries: ['fr', 'ch']
    };

    constructor(private applicationsListService: ApplicationsListService) {
    }

    ngOnInit(): void {
        this.applicationsList$ = this.applicationsListService.applicationsList();
    }

    emitNgModelChanges(event: string): void {
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ngOnChanges(changes: SimpleChanges): void {
        console.log('this only works when triggered from parent');
    }
}
