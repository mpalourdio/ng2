import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
    let component: CheckboxComponent;
    let fixture: ComponentFixture<CheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CheckboxComponent]
        })
            .compileComponents();
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(CheckboxComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should toggle heart class when checkbox checked', async () => {
        component.isChecked = true;
        fixture.changeDetectorRef.markForCheck();
        await fixture.whenStable();

        const heart: HTMLElement = fixture
            .debugElement
            .query(By.css('.heart'))
            .nativeElement;

        expect(heart.className).toContain('is-checked');
        expect(heart.className).not.toContain('is-not-checked');

        component.isChecked = false;
        fixture.changeDetectorRef.markForCheck();
        await fixture.whenStable();

        expect(heart.className).toContain('is-not-checked');
        expect(heart.className).not.toContain('is-checked');
    });

    it('should outline label when checkbox has focus', async () => {
        const heart: HTMLElement = fixture
            .debugElement
            .query(By.css('.heart'))
            .nativeElement;

        const checkbox: HTMLElement = fixture
            .debugElement
            .query(By.css('#checkbox'))
            .nativeElement;

        checkbox.focus();
        await fixture.whenStable();

        expect(heart.className).toContain('has-focus');
        expect(heart.className).toContain('is-not-checked');

        checkbox.blur();
        await fixture.whenStable();

        expect(heart.className).not.toContain('has-focus');
        expect(heart.className).toContain('is-not-checked');
    });
});
