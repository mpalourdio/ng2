import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { mapTo, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApplicationsListService {

    private delay(delayMs) {
        return source => source.pipe(switchMap(value => timer(delayMs).pipe(mapTo(value))));
    }

    public applicationsList(): Observable<string[]> {
        return of([
            {name: 'netbeans', isFav: false},
            {name: 'mega', isFav: false},
            {name: 'intellij', isFav: true}
        ])
            .pipe(this.delay(5));
    }
}
