import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApplicationsListService {
    private _applicationsList: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

    constructor() {
        this._applicationsList.next(['office', 'vsstudio', 'mega']);
    }

    get applicationsList(): Observable<string[]> {
        return this._applicationsList.asObservable().pipe(delay(3000));
    }
}
