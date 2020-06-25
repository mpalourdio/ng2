import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
    public hasFocus = false;
    public isChecked = false;

    public toggleLabelClass(): void {
        this.hasFocus = !this.hasFocus;
    }
}
