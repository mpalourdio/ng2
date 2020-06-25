import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Application } from './fav-star/application';

@Injectable({
    providedIn: 'root'
})
export class ApplicationsListService {

    public applicationsList(): Observable<Application[]> {
        return of([
            { name: 'netbeans', isFav: false },
            { name: 'mega', isFav: false },
            { name: 'intellij', isFav: true },
        ])
            .pipe(delay(5));
    }
}
