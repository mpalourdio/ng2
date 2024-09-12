import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../fav-star/application';
import { FormsModule } from "@angular/forms";
import { FavStarComponent } from "../fav-star/fav-star.component";
import { JsonPipe, NgFor, NgIf } from "@angular/common";

@Component({
    selector: 'app-search-filter',
    standalone: true,
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.scss'],
    imports: [FavStarComponent, FormsModule, NgIf, NgFor, JsonPipe]
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
