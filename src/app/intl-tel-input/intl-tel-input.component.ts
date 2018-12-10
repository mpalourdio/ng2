import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import * as intlTelInput from 'intl-tel-input';

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

    @Input()
    public label: string;

    @Input()
    public name = 'intl-tel-input-name';

    @Input()
    public required: boolean;

    @Input()
    public preferredCountries: string[] = [];

    @Input()
    public localizedCountries: any = {};

    @Input()
    public cssClass: string;

    @Output()
    private E164PhoneNumberChange = new EventEmitter<string>();

    @ViewChild('intlTelInput')
    public inputElement: ElementRef;

    private _phoneNumber: string;
    private _intlTelInput: any;

    ngAfterViewInit(): void {
        const phoneElement = this.inputElement.nativeElement;
        const options = {
            nationalMode: true,
            onlyCountries: this.countryCodes,
            preferredCountries: this.preferredCountries,
            localizedCountries: this.localizedCountries,
            formatOnDisplay: false
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

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
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
