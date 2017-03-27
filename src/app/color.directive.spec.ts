import { ColorDirective } from './color.directive';
import { ElementRef } from '@angular/core';

describe('ColorDirective', () => {
    it('should create an instance', () => {
        const directive = new ColorDirective(new ElementRef('h1'));
        expect(directive).toBeTruthy();
    });
});
