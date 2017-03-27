import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HttpserviceService } from './httpservice.service';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { ColorDirective } from './color.directive';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { fakeAsync } from '@angular/core/testing';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, SecondComponent, ColorDirective],
            providers: [HttpserviceService],
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
            .query(By.css('#firstdoublebinding'))
            .nativeElement;

        expect(parseInt(input.value, 10)).toBe(inputTextBindedValue);

    }));
});
