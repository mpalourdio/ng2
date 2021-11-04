import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
    hasFocus = false;
    isChecked = false;

    toggleLabelClass(): void {
        this.hasFocus = !this.hasFocus;
    }
}
