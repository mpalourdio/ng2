import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { ChildComponent } from './child/child.component';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { ToUppercasePipe } from './to-uppercase.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FortAwesomeModule } from '../fortawesome.module';

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        ColorDirective,
        ToUppercasePipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgHttpLoaderModule,
        FortAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
