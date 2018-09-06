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
        return of(['office', 'vsstudio', 'mega']).pipe(this.delay(2000));
    }
}
