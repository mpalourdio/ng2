import { ToUppercasePipe } from './to-uppercase.pipe';

describe('ToUppercasePipe', () => {

    let pipe;

    beforeEach(() => {
        pipe = new ToUppercasePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should uppercase', () => {
        expect(pipe.transform('wow')).toEqual('WOW');
    });
});
