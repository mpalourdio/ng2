import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as _orderBy from 'lodash/orderBy';

@Component({
    selector: 'fav-star',
    templateUrl: './fav-star.component.html',
    styleUrls: ['./fav-star.component.scss']
})
export class FavStarComponent {

    @Input()
    public application;

    private _applicationsList;

    @Output()
    private applicationsListChange = new EventEmitter<any>();

    @Input()
    set applicationsList(value) {
        this._applicationsList = _orderBy(value, ['isFav'], ['desc']);
        this.applicationsListChange.emit(this._applicationsList);
    }

    get applicationsList() {
        return this._applicationsList;
    }

    toggleFavorite(): void {
        this.application.isFav = !this.application.isFav;
        this.applicationsList = this._applicationsList;
    }
}
