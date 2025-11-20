import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
    let component: ChildComponent;
    let fixture: ComponentFixture<ChildComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ChildComponent,
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChildComponent);
        component = fixture.componentInstance;
    });

    it('should create a component instance', () => {
        expect(component).toBeTruthy();
    });

    it('should detect color changes', async () => {
        component.color = 'blue';
        await fixture.whenStable();

        const bgColor = fixture
            .debugElement
            .query(By.css('p'))
            .nativeElement
            .style
            .backgroundColor;

        expect(bgColor).toBe('blue');
    });

    it('should correctly detect ng-model changes and emit notifications', () => {
        const inputEvent = 'an input';

        component.doubleBindedChildChange.subscribe(
            (x: string) => expect(x).toBe(inputEvent)
        );

        component.emitNgModelChanges(inputEvent);
    });

    it('should correctly detect ng-model changes and emit notifications with getter/setter', () => {
        const inputEvent = 'an input';

        component.doubleBindedChild2Change.subscribe(
            (x: string) => expect(x).toBe(inputEvent)
        );

        component.doubleBindedChild2 = inputEvent;
    });

    it('should correctly emit signal changes', () => {
        const inputEvent = 'an input';

        component.doubleBindedChild3.subscribe(
            (x: string | undefined) => expect(x).toBe(inputEvent)
        );

        component.doubleBindedChild3.set(inputEvent);
    });
});
