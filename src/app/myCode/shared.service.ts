import {Injectable} from '@angular/core';
import {Shared} from './shared';

const SHARED: Shared = {id: 666, name: 'Mr. Hard'};

@Injectable()
export class SharedService {

  getShared(): Promise<Shared> {
    return Promise.resolve(SHARED);
  }
}
