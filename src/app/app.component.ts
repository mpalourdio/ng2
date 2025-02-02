import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ToUppercasePipe } from "./to-uppercase.pipe";
import { ChildComponent } from "./child/child.component";
import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [FormsModule, ToUppercasePipe, ChildComponent]
})
export class AppComponent {
    title = 'Hello World!';
    doubleBindedParent = 'Initial Value from AppComponent';
    signal = 'Initial Signal Value from AppComponent';

    constructor() {
        library.add(far, fas);
        dom.watch();
    }
}
