import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ColorDirective } from '../color.directive';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { ChildComponent } from './child.component';
import { FavStarComponent } from '../fav-star/fav-star.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { IntlTelInputComponent } from '../intl-tel-input/intl-tel-input.component';

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
                IntlTelInputComponent
            ],
            imports: [FormsModule],
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
            x => expect(x).toBe(inputEvent)
        );

        component.emitNgModelChanges(inputEvent);
    }));


    it('should correctly detect ng-model changes and emit notifications with getter/setter', async(() => {
        const inputEvent = 'an input';

        component.doubleBindedChild2Change.subscribe(
            x => expect(x).toBe(inputEvent)
        );

        component.doubleBindedChild2 = inputEvent;
    }));
});

describe('ChildComponentWithJasmineClock', () => {
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
                IntlTelInputComponent
            ],
            imports: [FormsModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        jasmine.clock().install();

        fixture = TestBed.createComponent(ChildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        element = fixture.nativeElement; // to access DOM element
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    // https://github.com/angular/angular/issues/10127
    it('should filter the array of applications', () => {
        jasmine.clock().tick(2000);

        const childValue = 'm';
        dispatchInputEventOnElement('#filter-input', childValue);

        const tableCell = fixture
            .debugElement
            .query(By.css('#mytable'))
            .nativeElement;

        expect(tableCell.rows[0].cells[0].innerHTML).toContain('mega');
    });

    // https://github.com/angular/angular/issues/10127
    it('should order the array of applications', () => {
        jasmine.clock().tick(2000);
        fixture.detectChanges();

        const tableCell = fixture
            .debugElement
            .query(By.css('#mytable'))
            .nativeElement;

        fixture.detectChanges();

        expect(tableCell.rows[0].cells[0].innerHTML).toContain('intellij');
    });

    function dispatchInputEventOnElement(selector: string, value: string) {
        const input = fixture.debugElement.query(By.css(selector)).nativeElement;
        input.value = value;

        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
    }
});
