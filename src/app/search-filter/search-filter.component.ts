import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../fav-star/application';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
    private _searchTerm!: string;

    @Input()
    applicationsList: Application[] = [];
    applicationsListFiltered: Application[] = [];

    ngOnInit(): void {
        this.applicationsListFiltered = [...this.applicationsList];
    }

    set searchTerm(value: string) {
        this._searchTerm = value;
        this.filterApplicationsList(value);
    }

    get searchTerm(): string {
        return this._searchTerm;
    }

    private filterApplicationsList(searchTerm: string): void {
        this.applicationsListFiltered = this.applicationsList.filter(a => a.name.includes(searchTerm));
    }
}
