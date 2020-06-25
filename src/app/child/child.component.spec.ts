import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IntlTelInputComponent } from 'intl-tel-input-ng';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ColorDirective } from '../color.directive';
import { FavStarComponent } from '../fav-star/fav-star.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
    let component: ChildComponent;
    let fixture: ComponentFixture<ChildComponent>;
    let element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChildComponent,
                ColorDirective,
                SearchFilterComponent,
                FavStarComponent,
                CheckboxComponent,
                IntlTelInputComponent,
            ],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        element = fixture.nativeElement; // to access DOM element
    });

    it('should create a component instance', () => {
        expect(component).toBeTruthy();
    });

    it('should detect color changes', () => {
        component.color = 'blue';
        fixture.detectChanges();

        const bgColor = fixture
            .debugElement
            .query(By.css('p'))
            .nativeElement
            .style
            .backgroundColor;

        expect(bgColor).toBe('blue');
    });

    it('should correctly detect ng-model changes and emit notifications', async(() => {
        const inputEvent = 'an input';

        component.doubleBindedChildChange.subscribe(
            (x: string) => expect(x).toBe(inputEvent)
        );

        component.emitNgModelChanges(inputEvent);
    }));


    it('should correctly detect ng-model changes and emit notifications with getter/setter', async(() => {
        const inputEvent = 'an input';

        component.doubleBindedChild2Change.subscribe(
            (x: string) => expect(x).toBe(inputEvent)
        );

        component.doubleBindedChild2 = inputEvent;
    }));
});
