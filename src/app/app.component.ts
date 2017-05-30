import { Component, OnDestroy, OnInit } from '@angular/core';
import { DummyInterface } from './dummy-interface';
import { Dummy } from './dummy';
import { Spinkit } from 'ng-http-loader/spinkits';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    private intervalId;
    title = 'Hello World!';
    inputText: DummyInterface;
    inputTextBinded: number;
    doubleBindedParent = 'Initial Value from AppComponent';
    Spinkit = Spinkit;

    ngOnInit(): void {
        this.initInterval();
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    initInterval(): void {
        let counter = 1;
        this.inputText = new Dummy();
        this.intervalId = setInterval(() => {
            if (counter > 5) {
                counter = 1;
            }
            this.inputText.setId(counter);
            this.inputTextBinded = this.inputText.getId();
            counter++;
        }, 1000);
    };
}
