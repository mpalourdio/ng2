import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
    private _searchTerm: string;

    @Input()
    public applicationsList: string[];

    @Output()
    private applicationsListChange = new EventEmitter<string[]>();

    private _appListBuffer: string[];

    public ngOnInit(): void {
        this._appListBuffer = JSON.parse(JSON.stringify(this.applicationsList));
    }

    set searchTerm(value) {
        this._searchTerm = value;
        this.filterApplicationsList(value);
    }

    get searchTerm(): string {
        return this._searchTerm;
    }

    private filterApplicationsList(searchTerm): void {
        this.applicationsListChange.emit(
            this._appListBuffer.filter((a: any) => a.name.includes(searchTerm))
        );
    }
}
