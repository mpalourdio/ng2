import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './color.directive';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, ChildComponent, ColorDirective],
            imports: [FormsModule, HttpModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.title).toBe('Hello World!');
    });

    it('should bind text to input', fakeAsync(() => {
        const inputTextBindedValue = 5;
        component.inputTextBinded = inputTextBindedValue;

        fixture.detectChanges();
        tick();

        const input = fixture
            .debugElement
            .query(By.css('#first-binding'))
            .nativeElement;

        expect(parseInt(input.value, 10)).toBe(inputTextBindedValue);
    }));

    it('should detect double binding', fakeAsync(() => {
        const childValue = 'changed';
        dispatchNgModelEventOnElement('#double-binded-child', childValue);

        const parentElement = fixture
            .debugElement
            .query(By.css('#double-binded-parent'))
            .nativeElement;

        expect(parentElement.value).toBe(childValue);
    }));

    function dispatchNgModelEventOnElement(selector: string, value: string) {

        const input = fixture.debugElement.query(By.css(selector)).nativeElement;
        input.value = value;

        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        tick();
    }
});
