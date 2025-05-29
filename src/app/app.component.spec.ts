import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideExperimentalZonelessChangeDetection } from "@angular/core";

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppComponent,
            ],
            providers: [
                provideExperimentalZonelessChangeDetection(),
            ]
        })
            .compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create a component instance', () => {
        expect(component).toBeTruthy();
        expect(component.title).toBe('Hello World!');
    });

    it('should correctly double bind', fakeAsync(() => {
        const childValue = 'changed';
        dispatchNgModelEventOnElement('#double-binded-child', childValue);

        const parentElement = fixture
            .debugElement
            .query(By.css('#double-binded-parent'))
            .nativeElement;

        expect(parentElement.value).toBe(childValue);
    }));

    function dispatchNgModelEventOnElement(selector: string, value: string): void {

        const input = fixture.debugElement.query(By.css(selector)).nativeElement;
        input.value = value;

        input.dispatchEvent(new Event('input'));
        tick();
    }
});
