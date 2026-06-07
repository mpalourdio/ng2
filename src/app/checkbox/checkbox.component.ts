import { Component, model } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-checkbox',
    standalone: true,
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    imports: [FormsModule, NgClass]
})
export class CheckboxComponent {
    hasFocus = model(false);
    isChecked = model(false);

    toggleLabelClass(): void {
        this.hasFocus.set(!this.hasFocus());
    }
}
