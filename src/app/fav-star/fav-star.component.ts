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
        this._applicationsList = _orderBy(value, ['name']);
        this.applicationsListChange.emit(this._applicationsList);
    }

    toggleFavorite(): void {
        this.application.isFav = !this.application.isFav;
    }
}
