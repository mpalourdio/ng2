import { Component } from '@angular/core';
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
    hasFocus = false;
    isChecked = false;

    toggleLabelClass(): void {
        this.hasFocus = !this.hasFocus;
    }
}
