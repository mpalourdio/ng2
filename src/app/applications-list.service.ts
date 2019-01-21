import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApplicationsListService {

    public applicationsList(): any {
        return of([
            {name: 'netbeans', isFav: false},
            {name: 'mega', isFav: false},
            {name: 'intellij', isFav: true}
        ])
            .pipe(delay(5));
    }
}
