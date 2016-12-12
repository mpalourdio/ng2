import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {FormsModule} from '@angular/forms';

import {TechsModule} from './techs';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {ChildComponent} from './myCode/child';
import {ParentComponent} from './myCode/parent';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        TechsModule,
        FormsModule,
    ],
    declarations: [
        RootComponent,
        MainComponent,
        HeaderComponent,
        TitleComponent,
        FooterComponent,
        ChildComponent,
        ParentComponent,
    ],
    bootstrap: [RootComponent],
})
export class AppModule {
}
