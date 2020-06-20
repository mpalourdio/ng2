import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { FormsModule } from '@angular/forms';

describe('SearchFilterComponent', () => {
    let component: SearchFilterComponent;
    let fixture: ComponentFixture<SearchFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchFilterComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
