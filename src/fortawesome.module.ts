import { NgModule } from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import packr from '@fortawesome/fontawesome-free-regular';
import packs from '@fortawesome/fontawesome-free-solid';

@NgModule()
export class FortAwesomeModule {
    constructor() {
        fontawesome.library.add(packr);
        fontawesome.library.add(packs);
    }
}
