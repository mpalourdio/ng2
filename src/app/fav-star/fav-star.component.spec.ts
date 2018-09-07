import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavStarComponent } from './fav-star.component';

describe('FavStarComponent', () => {
    let component: FavStarComponent;
    let fixture: ComponentFixture<FavStarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FavStarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FavStarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
