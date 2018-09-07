import { Component, Input } from '@angular/core';

@Component({
    selector: 'piam-fav-star',
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
        console.log(this.application.isFav);
    }
}
