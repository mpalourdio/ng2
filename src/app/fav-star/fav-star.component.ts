import { Component, Input } from '@angular/core';
import * as _orderBy from 'lodash/orderBy';

@Component({
    selector: 'fav-star',
    templateUrl: './fav-star.component.html',
    styleUrls: ['./fav-star.component.scss']
})
export class FavStarComponent {

    @Input()
    public application;

    @Input()
    public applicationsList;

    toggleFavorite(): void {
        this.application.isFav = !this.application.isFav;
        const orderedApps = _orderBy(this.applicationsList, ['name']);
        console.log(orderedApps);
    }
}
