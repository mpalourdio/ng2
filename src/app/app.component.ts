import {Component, OnInit} from "@angular/core";
import {Dummy} from "./dummy";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    inputText: Dummy;


    ngOnInit(): void {
        this.after3seconds();
    }

    after3seconds(): void {
        let counter = 1;
        this.inputText = new Dummy();
        setInterval(() => {
            this.inputText.id = counter;
            counter++;
        }, 1000);
    };
}
