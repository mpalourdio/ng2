import {Injectable} from '@angular/core';
import {SharedObject} from './shared';

const SHARED: SharedObject = {id: 666, name: 'Mr. Hard'};

@Injectable()
export class SharedService {

    getShared(): Promise<SharedObject> {
        return Promise.resolve(SHARED);
    }
}
