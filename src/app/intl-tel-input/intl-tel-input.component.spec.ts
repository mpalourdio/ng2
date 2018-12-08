import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IntlTelInputComponent } from './intl-tel-input.component';

describe('IntlTelInputComponent', () => {
    let component: IntlTelInputComponent;
    let fixture: ComponentFixture<IntlTelInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IntlTelInputComponent,
            ],
            imports: [
                FormsModule,
            ],
            providers: [
                NgForm,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntlTelInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should convert phone number to E164 format', () => {
        component.countryCodes = ['ch', 'fr'];
        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber).toBe('+41797703808');
    });

    it('should try to re-set E164 phone number on countryChange', () => {
        component.countryCodes = ['ch', 'fr'];
        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber).toBe('+41797703808');

        component.phoneNumber = '0681215656';
        component.intlTelInput.setCountry('fr');

        expect(component.E164PhoneNumber).toBe('+33681215656');
    });

    it('should add a label tag if label attribute is set', () => {
        const labelText = 'label text';
        component.label = labelText;
        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('label'))
            .nativeElement;

        expect(element).not.toBe(null);
        expect(element.innerText).toBe(labelText);
    });

    it('should not add a label by default', () => {
        const element = fixture
            .debugElement
            .query(By.css('label'));

        expect(element).toBe(null);
    });

    it('should set both required and aria-required if specified', () => {
        component.required = true;
        fixture.detectChanges();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('required')).toBe('required');
        expect(element.getAttribute('aria-required')).toBe('true');
    });

    it('should set name and id to the same value', () => {
        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.getAttribute('name')).toBe(element.getAttribute('id'));
    });

    it('should allow specifying a css class', () => {
        const cssClass = 'my-css-class';
        component.cssClass = cssClass;
        fixture.detectChanges();

        const element: HTMLElement = fixture
            .debugElement
            .query(By.css('input'))
            .nativeElement;

        expect(element.className).toContain(cssClass);
    });
});
