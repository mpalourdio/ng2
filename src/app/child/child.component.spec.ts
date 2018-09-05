import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { ColorDirective } from '../color.directive';
import { By } from '@angular/platform-browser';
import { ChildComponent } from './child.component';
import { SearchFilterComponent } from '../search-filter/search-filter.component';

describe('ChildComponent', () => {
    let component: ChildComponent;
    let fixture: ComponentFixture<ChildComponent>;
    let element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChildComponent, ColorDirective, SearchFilterComponent],
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

    it('should filter the array of the child element', fakeAsync(() => {
        tick(3001);
        fixture.detectChanges();

        const childValue = 'm';
        dispatchInputEventOnElement('#filter-input', childValue);

        const tableCell = fixture
            .debugElement
            .query(By.css('#mytable'))
            .nativeElement;

        expect(tableCell.rows[0].cells[0].innerHTML).toBe('mega');
    }));

    function dispatchInputEventOnElement(selector: string, value: string) {
        const input = fixture.debugElement.query(By.css(selector)).nativeElement;
        input.value = value;

        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        tick();
    }
});
