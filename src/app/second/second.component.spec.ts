import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second.component';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from '../color.directive';
import { By } from '@angular/platform-browser';

describe('SecondComponent', () => {
    let component: SecondComponent;
    let fixture: ComponentFixture<SecondComponent>;
    let element;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SecondComponent, ColorDirective],
            imports: [FormsModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SecondComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        element = fixture.nativeElement; // to access DOM element
    });

    it('should create', () => {
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
});
