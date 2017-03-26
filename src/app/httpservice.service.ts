import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Hydrate} from './hydrate';
import 'rxjs/add/operator/toPromise';

const url = 'http://localhost:4200/api/hydrate';

@Injectable()
export class HttpserviceService {

    constructor(private http: Http) {
    }

    runQuery(): Promise<Hydrate[]> {
        return this.http.get(url)
            .toPromise()
            .then(this.extractData, this.handleError);
    }

    private extractData(res: Response) {
        return res.json() || {};
    }

    private handleError(error: Response | any) {
        return Promise.reject(error);
    }
}
