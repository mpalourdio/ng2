import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './color.directive';
import { By } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ToUppercasePipe } from './to-uppercase.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FavStarComponent } from './fav-star/fav-star.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { IntlTelInputComponent } from './intl-tel-input/intl-tel-input.component';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                ChildComponent,
                SearchFilterComponent,
                ColorDirective,
                ToUppercasePipe,
                FavStarComponent,
                CheckboxComponent,
                IntlTelInputComponent,
            ],
            imports: [FormsModule, HttpClientModule, NgHttpLoaderModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
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

    function dispatchNgModelEventOnElement(selector: string, value: string) {

        const input = fixture.debugElement.query(By.css(selector)).nativeElement;
        input.value = value;

        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        tick();
    }
});
