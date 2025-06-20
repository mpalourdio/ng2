import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavStarComponent } from './fav-star.component';
import { provideZonelessChangeDetection } from "@angular/core";

describe('FavStarComponent', () => {
    let component: FavStarComponent;
    let fixture: ComponentFixture<FavStarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FavStarComponent],
            providers: [
                provideZonelessChangeDetection(),
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FavStarComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle favorite', () => {
        component.application = { isFav: false, name: 'name' };
        component.toggleFavorite();
        expect(component.application.isFav).toBeTruthy();
    });
});
