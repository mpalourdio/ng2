import { NgModule } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import faAddressBook from '@fortawesome/fontawesome-free-regular';

@NgModule()
export class FortAwesomeModule {
    constructor() {
        fontawesome.library.add(faAddressBook);
    }
}
