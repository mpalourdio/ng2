import { NgModule } from '@angular/core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dom, library } from '@fortawesome/fontawesome-svg-core';

@NgModule()
export class FortAwesomeModule {
    constructor() {
        library.add(far, fas);
        dom.watch();
    }
}
