import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
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

    it('should convert phone number to E164 format', async(() => {
        component.countryCodes = ['ch', 'fr'];
        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber).toBe('+41797703808');
    }));

    it('should try to re-set E164 phone number on countryChange', async(() => {
        component.countryCodes = ['ch', 'fr'];
        component.phoneNumber = '0797703808';

        expect(component.E164PhoneNumber).toBe('+41797703808');

        component.phoneNumber = '0681215656';
        component.intlTelInput.setCountry('fr');

        expect(component.E164PhoneNumber).toBe('+33681215656');
    }));
});
