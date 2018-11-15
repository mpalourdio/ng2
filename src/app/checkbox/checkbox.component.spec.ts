import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('CheckboxComponent', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CheckboxComponent],
            imports: [FormsModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle heart class when checkbox checked', () => {
        component.isChecked = true;
        fixture.detectChanges();

        const heart: HTMLElement = fixture
            .debugElement
            .query(By.css('.heart'))
            .nativeElement;

        expect(heart.className).toContain('is-checked');
        expect(heart.className).not.toContain('is-not-checked');

        component.isChecked = false;
        fixture.detectChanges();

        expect(heart.className).toContain('is-not-checked');
        expect(heart.className).not.toContain('is-checked');
    });

    it('should outline label when checkbox has focus', () => {

        const heart: HTMLElement = fixture
            .debugElement
            .query(By.css('.heart'))
            .nativeElement;

        const checkbox: DebugElement = fixture
            .debugElement
            .query(By.css('#checkbox'));

        checkbox.triggerEventHandler('focus', null);
        fixture.detectChanges();

        expect(heart.className).toContain('has-focus');
        expect(heart.className).toContain('is-not-checked');

        checkbox.triggerEventHandler('blur', null);
        fixture.detectChanges();

        expect(heart.className).not.toContain('has-focus');
        expect(heart.className).toContain('is-not-checked');
    });
});
