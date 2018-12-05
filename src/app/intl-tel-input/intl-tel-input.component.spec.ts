import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlTelInputComponent } from './intl-tel-input.component';
import { FormsModule, NgForm } from '@angular/forms';

describe('IntlTelInputComponent', () => {
    let component: IntlTelInputComponent;
    let fixture: ComponentFixture<IntlTelInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IntlTelInputComponent],
            imports: [FormsModule],
            providers: [NgForm]
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
});
