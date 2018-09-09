import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { mapTo, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApplicationsListService {

    delay(delayMs) {
        return source => source.pipe(switchMap(value => timer(delayMs).pipe(mapTo(value))));
    }

    applicationsList(): Observable<string[]> {
        return of([
            {name: 'netbeans', isFav: false},
            {name: 'mega', isFav: false},
            {name: 'intellij', isFav: false}
        ])
            .pipe(this.delay(2000));
    }
}
