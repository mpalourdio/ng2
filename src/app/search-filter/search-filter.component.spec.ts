import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { provideZonelessChangeDetection } from "@angular/core";

describe('SearchFilterComponent', () => {
    let component: SearchFilterComponent;
    let fixture: ComponentFixture<SearchFilterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SearchFilterComponent],
            providers: [
                provideZonelessChangeDetection(),
            ]
        })
            .compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(SearchFilterComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
