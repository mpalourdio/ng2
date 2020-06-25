import { Component, Input } from '@angular/core';
import { Application } from './application';

@Component({
    selector: 'fav-star',
    templateUrl: './fav-star.component.html',
    styleUrls: ['./fav-star.component.scss']
})
export class FavStarComponent {

    @Input()
    public application!: Application;

    public toggleFavorite(): void {
        this.application.isFav = !this.application.isFav;
    }
}
