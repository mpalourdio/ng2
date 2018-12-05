import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import intlTelInput from 'intl-tel-input/build/js/intlTelInput';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
    selector: 'intl-tel-input',
    templateUrl: './intl-tel-input.component.html',
    styleUrls: ['./intl-tel-input.component.scss'],
    viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class IntlTelInputComponent implements AfterViewInit {

    @Input()
    public E164PhoneNumber: string;

    @Output()
    private E164PhoneNumberChange = new EventEmitter<string>();

    @ViewChild('intlTelInput')
    public inputElement: ElementRef;

    public isPhoneNumberValid = false;
    private _phoneNumber;
    private intlTelInput: any;

    ngAfterViewInit() {
        const phoneElement = this.inputElement.nativeElement;
        const options = {
            localizedCountries: {ch: 'Suisse'},
            onlyCountries: ['ch', 'al', 'ad', 'at', 'by', 'be', 'ba', 'bg', 'hr', 'cz', 'dk',
                'ee', 'fo', 'fi', 'fr', 'de', 'gi', 'gr', 'va', 'hu', 'is', 'ie', 'it', 'lv',
                'li', 'lt', 'lu', 'mk', 'mt', 'md', 'mc', 'me', 'nl', 'no', 'pl', 'pt', 'ro',
                'ru', 'sm', 'rs', 'sk', 'si', 'es', 'se', 'ch', 'ua', 'gb'],
            preferredCountries: ['ch', 'fr']
        };
        this.modifyCountryData();
        this.intlTelInput = intlTelInput(phoneElement, options);
    }


    private modifyCountryData(): void {
        const countryData = window['intlTelInputGlobals'].getCountryData();
        for (let i = 0; i < countryData.length; i++) {
            const country = countryData[i];
            country.name = country.name.replace(/.+\((.+)\)/, '$1');
        }
    }

    get phoneNumber(): any {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
        this.i18nizePhoneNumber();
    }

    public i18nizePhoneNumber(): void {
        this.E164PhoneNumber = null;
        this.isPhoneNumberValid = this.intlTelInput.isValidNumber();
        if (this.isPhoneNumberValid) {
            this.E164PhoneNumber = this.intlTelInput.getNumber();
        }

        this.E164PhoneNumberChange.emit(this.E164PhoneNumber);
    }
}
