import { Component, OnInit } from '@angular/core';
import { DummyInterface } from './dummy-interface';
import { Hydrate } from './hydrate';
import { HttpserviceService } from './httpservice.service';
import { Dummy } from './dummy';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpserviceService]
})
export class AppComponent implements OnInit {
    title = 'Hello World!';
    inputText: DummyInterface;
    inputTextBinded: number;
    httpResults: Hydrate[];

    constructor(private httpService: HttpserviceService) {
    }

    ngOnInit(): void {
        this.initInterval();
        this.runHttpQuery();
    }

    private runHttpQuery() {
        this.httpService.runQuery().then(
            items => this.httpResults = items,
            error => this.httpResults = error
        );
    }

    initInterval(): void {
        let counter = 1;
        this.inputText = new Dummy();
        setInterval(() => {
            if (counter > 5) {
                counter = 1;
            }
            this.inputText.setId(counter);
            this.inputTextBinded = this.inputText.getId();
            counter++;
        }, 1000);
    };
}
