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
    private applicationsListChange = new EventEmitter<string[]>();

    private _appListBuffer: string[];


    constructor(private applicationsListService: ApplicationsListService) {
        this.applicationsListService.applicationsList().subscribe(l => this._appListBuffer = l);
    }

    set searchTerm(value) {
        this._searchTerm = value;
        this.filterApplicationsList(value);
    }

    private filterApplicationsList(searchTerm) {
        this.applicationsList = this._appListBuffer.filter((a: any) => a.name.includes(searchTerm));
        this.applicationsListChange.emit(this.applicationsList);
    }
}
