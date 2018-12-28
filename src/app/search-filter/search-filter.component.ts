import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationsListService } from '../applications-list.service';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
    private _searchTerm: string;

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

    get searchTerm(): string {
        return this._searchTerm;
    }

    private filterApplicationsList(searchTerm): void {
        this.applicationsList = this._appListBuffer.filter((a: any) => a.name.includes(searchTerm));
        this.applicationsListChange.emit(this.applicationsList);
    }
}
