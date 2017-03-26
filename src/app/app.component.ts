import {Component, OnInit} from "@angular/core";
import {Dummy} from "./dummy";
import {DummyInterface} from "./dummy-interface";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    inputText: DummyInterface;
    inputTextBinded: number;


    ngOnInit(): void {
        this.after3seconds();
    }

    after3seconds(): void {
        let counter = 1;
        this.inputText = new Dummy();
        setInterval(() => {
            this.inputText.setId(counter);
            this.inputTextBinded = this.inputText.getId();
            counter++;
        }, 1000);
    };
}
