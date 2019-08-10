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

    @Input()
    set applicationsList(value) {
        this._applicationsList = _orderBy(value, ['isFav'], ['desc']);
    }

    get applicationsList() {
        return this._applicationsList;
    }

    public toggleFavorite(): void {
        this.application.isFav = !this.application.isFav;
        this.applicationsList = this._applicationsList;
    }
}
