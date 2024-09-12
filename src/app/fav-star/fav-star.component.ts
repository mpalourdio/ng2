import { Component, Input } from '@angular/core';
import { Application } from './application';
import { NgIf } from "@angular/common";

@Component({
    selector: 'fav-star',
    standalone: true,
    templateUrl: './fav-star.component.html',
    styleUrls: ['./fav-star.component.scss'],
    imports: [NgIf]
})
export class FavStarComponent {

    @Input()
    application!: Application;

    toggleFavorite(): void {
        this.application.isFav = !this.application.isFav;
    }
}
