import {Component} from '@angular/core';
import {SharedService} from './shared.service';
import {SharedObject} from './shared';
import {OnInit} from '@angular/core';


@Component({
    selector: 'parent-component',
    template: require('./parent.html'),
    providers: [
        SharedService,
    ],
})
export class ParentComponent implements OnInit {
    allo: any;
    shared: SharedObject;

    constructor(private sharedService: SharedService) {
    }

    getShared(): void {
        this.sharedService.getShared().then(shared => {
            this.shared = shared;
            this.allo = this.shared;
        });
    }

    ngOnInit(): void {
        this.getShared();
    }
}
