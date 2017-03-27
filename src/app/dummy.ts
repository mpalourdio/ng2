import { DummyInterface } from './dummy-interface';
export class Dummy implements DummyInterface {
    private _id: number;

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }
}
