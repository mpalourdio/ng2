import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input/build/js/intlTelInput';
import * as intlTelInputUtils from 'intl-tel-input/build/js/utils';

@Component({
    selector: 'intl-tel-input',
    templateUrl: './intl-tel-input.component.html',
    styleUrls: ['./intl-tel-input.component.scss'],
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntlTelInputComponent implements AfterViewInit {

    @Input()
    public E164PhoneNumber: string;

    @Input()
    public countryCodes: string[] = [];

    @Output()
    private E164PhoneNumberChange = new EventEmitter<string>();

    @ViewChild('intlTelInput')
    public inputElement: ElementRef;

    private _phoneNumber;
    private _intlTelInput: any;

    ngAfterViewInit(): void {
        const phoneElement = this.inputElement.nativeElement;
        const options = {
            nationalMode: true,
            onlyCountries: this.countryCodes,
            preferredCountries: ['ch'],
            localizedCountries: { ch: 'Suisse' },
            formatOnDisplay: false,
            utilsScript: intlTelInputUtils
        };
        this.modifyCountryData();
        this._intlTelInput = intlTelInput(phoneElement, options);
    }

    private modifyCountryData(): void {
        const countryData = window['intlTelInputGlobals'].getCountryData();
        for (let i = 0; i < countryData.length; i++) {
            const country = countryData[i];
            country.name = country.name.replace(/.+\((.+)\)/, '$1');
        }
    }

    get intlTelInput(): any {
        return this._intlTelInput;
    }

    get phoneNumber(): any {
        return this._phoneNumber;
    }

    set phoneNumber(value) {
        this._phoneNumber = value;
        this._intlTelInput.setNumber(value);
        this.i18nizePhoneNumber();
    }

    public i18nizePhoneNumber(): void {
        this.E164PhoneNumber = null;
        if (this._intlTelInput.isValidNumber()) {
            this.E164PhoneNumber = this._intlTelInput.getNumber();
        }
        this.E164PhoneNumberChange.emit(this.E164PhoneNumber);
    }
}
