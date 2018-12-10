import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IntlTelInputNgModule } from 'intl-tel-input-ng';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FortAwesomeModule } from '../fortawesome.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChildComponent } from './child/child.component';
import { ColorDirective } from './color.directive';
import { FavStarComponent } from './fav-star/fav-star.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ToUppercasePipe } from './to-uppercase.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        ColorDirective,
        ToUppercasePipe,
        SearchFilterComponent,
        FavStarComponent,
        CheckboxComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgHttpLoaderModule.forRoot(),
        IntlTelInputNgModule.forRoot(),
        FortAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
