import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationsListService } from '../applications-list.service';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
    private _searchTerm;

    @Input()
    public applicationsList: string[];

    @Output()
    applicationsListChange = new EventEmitter<string[]>();

    private appListBuffer: string[];


    constructor(private applicationsListService: ApplicationsListService) {
        this.applicationsListService.applicationsList().subscribe(l => this.appListBuffer = l);
    }

    set searchTerm(value) {
        this._searchTerm = value;
        this.filterApplicationsList(value);
    }

    private filterApplicationsList(searchTerm) {
        this.applicationsList = this.appListBuffer.filter(a => a.includes(searchTerm));
        this.applicationsListChange.emit(this.applicationsList);
    }
}
